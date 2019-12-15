import { put, call, all, takeLatest } from "redux-saga/effects";

import axios from "axios";

import { apiTypes } from "./reviews.types";

import { toast } from "react-toastify";

import {
  getReviewsByBootcampSuccess,
  getReviewsByBootcampFailure,
  addReviewFailure,
  addReviewSuccess
} from "./reviews.actions";

import { privateRequest } from "../../utils/functions";

export function* addReview({ payload, history }) {
  try {
    const { data, bootcampId } = payload;

    yield privateRequest(
      `/api/v1/bootcamps/${bootcampId}/reviews`,
      data,
      "POST"
    );

    yield put(addReviewSuccess());

    toast.success("Review created succesfully!");

    history.push(`/bootcamps/${bootcampId}/reviews`);
  } catch (err) {
    yield put(addReviewFailure(err));
  }
}

export function* getReviewsByBootcamp({ payload }) {
  try {
    const { bootcampId } = payload;

    const {
      data: { data }
    } = yield axios.get(`/api/v1/bootcamps/${bootcampId}/reviews`);

    yield put(getReviewsByBootcampSuccess(data));
  } catch (error) {
    yield put(getReviewsByBootcampFailure(error));
  }
}

export function* getReviewsByBootcampListener() {
  yield takeLatest(
    apiTypes.GET_REVIEWS_BY_BOOTCAMP_START,
    getReviewsByBootcamp
  );
}

export function* addReviewListener() {
  yield takeLatest(apiTypes.ADD_REVIEW_START, addReview);
}

export default function* reviewSaga() {
  yield all([call(getReviewsByBootcampListener), call(addReviewListener)]);
}
