
import * as actions from "../constants/constants";

export const simpleAction = (mailId, password) => ({
  type: 'SIMPLE_ACTION',
  payload: {
    mailId,
    password,
  },
});


export const putAction = (data) => ({
  type: 'PUT_ACTION',
  data
});