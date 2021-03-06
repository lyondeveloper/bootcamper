import { put, takeLatest, all, call } from "redux-saga/effects";
import { apiTypes } from "./users.types";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { setAuthToken, setMultipleItemsToStorage } from "../../utils/functions";

import {
  registerUserSuccess,
  registerUserFailure,
  loginUserFailure,
  loginUserSuccess,
  logoutUserSuccess,
  logoutUserFailure,
  renovateTokenFailure,
  renovateTokenSuccess,
  updateUserFailure,
  updateUserSuccess,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  updatePasswordFailure,
  updatePasswordSuccess
} from "./users.actions";

export function* renovateToken({ payload }) {
  try {
  } catch (err) {
    yield put(renovateTokenFailure(err.message));
  }
}

export function* registerUserExecute({ payload, history }) {
  try {
    yield axios.post("/api/v1/auth/register", payload);
    yield put(registerUserSuccess());
    toast.success("Register succesfully!");
    history.push("/auth/login");
  } catch (err) {
    yield put(registerUserFailure(err.message));
  }
}

export function* loginUserExecute({ payload, history }) {
  try {
    const { data } = yield axios.post("/api/v1/auth/login", payload);

    setAuthToken(data.token);

    const tokenDecoded = jwtDecode(data.token);

    const {
      data: { data: user }
    } = yield axios.get("/api/v1/auth/me");

    const userData = {
      ...user,
      tokenInfo: { ...tokenDecoded }
    };

    setMultipleItemsToStorage({
      jwtToken: JSON.stringify(data.token),
      userSession: JSON.stringify(userData)
    });

    yield put(loginUserSuccess(userData));

    toast.success("Login Successfully");
    history.push("/");
  } catch (err) {
    yield put(loginUserFailure(err.response.data.error));
  }
}

export function* logoutUser({ history }) {
  try {
    yield axios.get("/api/v1/auth/logout");

    yield put(logoutUserSuccess());

    history.push("/auth/login");
  } catch (err) {
    yield put(logoutUserFailure(err));
  }
}

export function* updateUserExecute({ payload, history }) {
  try {
    yield axios.put("/api/v1/auth/updatedetails", payload);
    yield put(updateUserSuccess());
    yield put(logoutUser());
  } catch (err) {
    yield put(updateUserFailure(err));
  }
}

export function* updatePassword({ payload }) {
  try {
    yield axios.put("/api/v1/auth/updatepassword", payload);
    yield put(updatePasswordSuccess());
    yield put(logoutUser());
  } catch (err) {
    yield put(updatePasswordFailure(err.response.data.error));
  }
}

export function* forgotPassword({ payload }) {
  try {
    yield axios.post("/api/v1/auth/forgotpassword", payload);

    yield put(forgotPasswordSuccess());
  } catch (err) {
    yield put(forgotPasswordFailure(err.response.data.error));
  }
}

export function* renovateTokenListener() {
  yield takeLatest(apiTypes.RENOVATE_TOKEN_START, renovateToken);
}

export function* registerUserListener() {
  yield takeLatest(apiTypes.REGISTER_USER_START, registerUserExecute);
}

export function* loginUserListener() {
  yield takeLatest(apiTypes.LOGIN_USER_START, loginUserExecute);
}

export function* logoutUserListener() {
  yield takeLatest(apiTypes.LOGOUT_USER_START, logoutUser);
}

export function* updateUserListener() {
  yield takeLatest(apiTypes.UPDATE_USER_START, updateUserExecute);
}

export function* forgotPasswordListener() {
  yield takeLatest(apiTypes.FORGOT_PASSWORD_START, forgotPassword);
}

export function* updatePasswordListener() {
  yield takeLatest(apiTypes.UPDATE_PASSWORD_START, updatePassword);
}

export default function* userSaga() {
  yield all([
    call(loginUserListener),
    call(registerUserListener),
    call(renovateTokenListener),
    call(updateUserListener),
    call(forgotPasswordListener),
    call(updatePasswordListener),
    call(logoutUserListener)
  ]);
}
