import { put, call, all, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import { apiTypes } from './reviews.types';

import { toast } from 'react-toastify'

import {
  getReviewsByBootcampSuccess,
  getReviewsByBootcampFailure
} from './reviews.actions';

export function* getReviewsByBootcamp({ payload }) {
  try {
    const { bootcampId } = payload;

    const { data: { data } } = yield axios.get(`/api/v1/bootcamps/${bootcampId}/reviews`);

    yield put(getReviewsByBootcampSuccess(data));

  } catch (error) {
    yield put(getReviewsByBootcampFailure(error));
  }
}

export function* getReviewsByBootcampListener() {
  yield takeLatest(apiTypes.GET_REVIEWS_BY_BOOTCAMP_START, getReviewsByBootcamp);
}

export default function* reviewSaga() {
  yield all([call(getReviewsByBootcampListener)]);
}
