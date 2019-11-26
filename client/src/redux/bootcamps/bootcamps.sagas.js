import { takeLatest, put, call, all } from 'redux-saga/effects';

import axios from 'axios';

import types from './bootcamps.types';

import {
  getBootcampsFailure,
  getBootcampsSuccess,
  getSingleBootcampFailure,
  getSingleBootcampSuccess
} from './bootcamp.actions';

export function* fetchSingleBootcampExecute({ payload: id }) {
  debugger;
  try {
    const { data, status } = yield axios.get(`/api/v1/bootcamps/${id}`);
    if (status === 200) yield put(getSingleBootcampSuccess(data.data));
  } catch (err) {
    yield put(getSingleBootcampFailure(err));
  }
}

export function* fetchBootcampsExecute() {
  try {
    const { data, status } = yield axios.get('/api/v1/bootcamps');

    if (status === 200) yield put(getBootcampsSuccess(data.data));
  } catch (err) {
    yield put(getBootcampsFailure(err));
  }
}

export function* fetchBootcampsListener() {
  yield takeLatest(types.GET_BOOTCAMPS_START, fetchBootcampsExecute);
}

export function* fetchSingleBootcampListener() {
  yield takeLatest(types.GET_SINGLE_BOOTCAMP_START, fetchSingleBootcampExecute);
}

export default function* bootcampSagas() {
  yield all([call(fetchBootcampsListener), call(fetchSingleBootcampListener)]);
}
