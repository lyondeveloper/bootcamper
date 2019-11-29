import { put, takeLatest, all, call } from 'redux-saga/effects';
import types from './users.types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../utils/functions';

import {
  registerUserSuccess,
  registerUserFailure,
  loginUserFailure,
  loginUserSuccess,
  checkUserSessionFailure,
  checkUserSessionSuccess
} from './users.actions';

export function* checkUserSessionExecute({ payload }) {
  try {
    const token = localStorage.getItem('jwtToken');
    debugger;
  } catch (err) {
    yield put(checkUserSessionFailure(err.message));
  }
  // debugger;
}

export function* registerUserExecute({ payload, history }) {
  try {
    const { data, success } = yield axios.post(
      '/api/v1/auth/register',
      payload
    );
    yield put(registerUserSuccess());
    toast.success('Register succesfully!');
    history.push('/auth/login');
  } catch (err) {
    yield put(registerUserFailure(err.message));
  }
}

export function* loginUserExecute({ payload, history }) {
  try {
    const { data, status } = yield axios.post('/api/v1/auth/login', payload);

    setAuthToken(data.token);

    const tokenDecoded = jwtDecode(data.token);

    const {
      data: { data: user }
    } = yield axios.get('/api/v1/auth/me');

    const userData = {
      ...user,
      tokenInfo: { ...tokenDecoded }
    };

    localStorage.setItem('jwtToken', JSON.stringify(data.token));
    localStorage.setItem('userSession', JSON.stringify(userData));
    yield put(loginUserSuccess(userData));
    toast.success('Login Successfully');
    history.push('/');
  } catch (err) {
    yield put(loginUserFailure(err.message));
  }
}

export function* checkUserSessionListener() {
  yield takeLatest(types.CHECK_USER_SESSION_START, checkUserSessionExecute);
}

export function* registerUserListener() {
  yield takeLatest(types.REGISTER_USER_START, registerUserExecute);
}

export function* loginUserListener() {
  yield takeLatest(types.LOGIN_USER_START, loginUserExecute);
}

export default function* userSaga() {
  yield all([
    call(loginUserListener),
    call(registerUserListener),
    call(checkUserSessionListener)
  ]);
}
