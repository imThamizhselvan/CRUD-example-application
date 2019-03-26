import { takeLatest, call, put, all } from "redux-saga/effects";
import config from '../config/base';
import * as constants from "../constants/constants";
import { putAction } from "../actions/homeAction";
import request, { makeReqOptions } from '../utils/request';
import sha512 from 'js-sha512';

export function* watcherSaga() {
  yield all([
    takeLatest(constants.SIMPLE_ACTION, login),
  ]);
}

function* login({payload}) {
  console.log('payload', payload);
  const requestUrl = config.base.url + config.api.version + config.api.login;
  const hashedPassword = sha512(payload.password);
  console.log('hashedPassword', hashedPassword);
  // const data = { email: payload.mailId, password: hashedPassword };
  const data = { email: "tamilselvan@mailinator.com", password: "d76a18fd56099700a02c4dd57bf9321475ebd817fa8b4943923324ca11ca6df4a9ae2d4f86df361d08a4c2f5418c8251e82a8c861819a5ceb269d8f2cc15d988" };

  try {
    const response = yield call(request, requestUrl, makeReqOptions({ data, method: 'POST' }));
    yield put(putAction(response))
  } catch(error) {
    console.log('error');
  }
}

