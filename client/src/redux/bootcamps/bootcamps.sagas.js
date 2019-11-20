import { takeLatest, put, call, all } from 'redux-saga/effects';

import axios from 'axios';

import types from './bootcamps.types';

import { getBootcampsFailure, getBootcampsSuccess } from './bootcamp.actions';

export function* fetchBootcampsExecute() {
  try {
    const { data, status } = yield axios.get('/api/v1/bootcamps');

    if (status === 200) {
      yield put(getBootcampsSuccess(data.data));
    }
  } catch (err) {
    yield put(getBootcampsFailure(err));
  }
}

export function* fetchBootcampsListener() {
  yield takeLatest(types.GET_BOOTCAMPS_START, fetchBootcampsExecute);
}

export default function* bootcampSagas() {
  yield all([call(fetchBootcampsListener)]);
}
