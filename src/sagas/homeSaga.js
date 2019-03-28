import { takeLatest, call, put, all, take } from "redux-saga/effects";
import config from '../config/base';
import * as constants from "../constants/constants";
import { putAction } from "../actions/homeAction";
import request, { makeReqOptions } from '../utils/request';
import sha512 from 'js-sha512';
import history from '../containers/App/history';

export function* watcherSaga() {
  yield all([
    takeLatest(constants.LOGIN, login),
    takeLatest(constants.GET_HORSES, getHorses),
    takeLatest(constants.CREATE_HORSE, createHorse),
    takeLatest(constants.DELETE_HORSE, deleteHorse),
  ]);
}

function* getHorses() {
  const requestUrl = config.base.url + config.api.version + config.api.horses;
  try {
    const response = yield call(request, requestUrl, makeReqOptions({apiKey: true, method: 'GET' }));
    console.log('response', response);
    yield put(putAction(response))
  } catch(error) {
    console.log('error');
  }
}

function* createHorse({payload}) {
  const requestUrl = config.base.url + config.api.version + config.api.horses;
  const data = { 
    sex: payload.data.gender,
    horse_name: payload.data.horseName,
    horse_number: payload.data.horseNumber,
    color: payload.data.color,
    type: payload.data.type
  };
  try {
    yield call(request, requestUrl, makeReqOptions({apiKey: true, data, method: 'POST' }));
  } catch(error) {
    console.log('error');
  }
}

function* login({payload}) {
  const requestUrl = config.base.url + config.api.version + config.api.login;
  const hashedPassword = sha512(payload.password);
  const data = { email: payload.mailId, password: hashedPassword };
  // const data = { email: "tamilselvan@mailinator.com", password: "d76a18fd56099700a02c4dd57bf9321475ebd817fa8b4943923324ca11ca6df4a9ae2d4f86df361d08a4c2f5418c8251e82a8c861819a5ceb269d8f2cc15d988" };
  try {
    const response = yield call(request, requestUrl, makeReqOptions({ data, method: 'POST' }));
    localStorage.setItem("access_token", response.data.access_token);
    history.push('/home');
    yield put(putAction(response));
  } catch(error) {
    console.log('error');
  }
}

function* deleteHorse({payload}) {
  let requestUrl = config.base.url + config.api.version + config.api.modifyHorses;
  const data = { horseId: payload.data};
  requestUrl = requestUrl.replace(`:horseId`, payload.data );
  try {
    yield call(request, requestUrl, makeReqOptions({apiKey: true, data, method: 'DELETE' }));
  } catch(error) {
    console.log('error');
  }
}
