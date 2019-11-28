import { put, takeLatest, all, call } from "redux-saga/effects";
import types from "./users.types";

export function* registerUserExecute() {}

export function* registerUserListener() {
  yield takeLatest(types.REGISTER_USER_START, registerUserExecute);
}

export function* loginUserExecute() {}

export function* loginUserListener() {
  yield takeLatest(types.LOGIN_USER_START, loginUserExecute);
}

export default function* userSaga() {
  yield all([call(loginUserListener), call(registerUserListener)]);
}
