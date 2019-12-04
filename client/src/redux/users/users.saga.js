import { put, takeLatest, all, call } from "redux-saga/effects";
import {apiTypes, localTypes} from "./users.types";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { setAuthToken, setMultipleItemsToStorage } from "../../utils/functions";

import {
  registerUserSuccess,
  registerUserFailure,
  loginUserFailure,
  loginUserSuccess,
  renovateTokenFailure,
  renovateTokenSuccess
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

export function* renovateTokenListener() {
  yield takeLatest(apiTypes.RENOVATE_TOKEN_START, renovateToken);
}

export function* registerUserListener() {
  yield takeLatest(apiTypes.REGISTER_USER_START, registerUserExecute);
}

export function* loginUserListener() {
  yield takeLatest(apiTypes.LOGIN_USER_START, loginUserExecute);
}

export default function* userSaga() {
  yield all([
    call(loginUserListener),
    call(registerUserListener),
    call(renovateTokenListener)
  ]);
}
