
import * as actions from "../constants/constants";

export const simpleAction = (mailId, password) => ({
  type: 'LOGIN',
  payload: {
    mailId,
    password,
  },
});

export const createHorse = (data) => ({
  type: 'CREATE_HORSE',
  payload: {
    data,
  },
});

export const deleteHorse = (data) => ({
  type: 'DELETE_HORSE',
  payload: {
    data,
  },
});


export const getHorse = () => ({
  type: 'GET_HORSES',
});

export const putAction = (data) => ({
  type: 'PUT_ACTION',
  data
});

