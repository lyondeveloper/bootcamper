import { takeLatest, put, call, all } from "redux-saga/effects";

import axios from "axios";

import types from "./bootcamps.types";

import {
  getBootcampsFailure,
  getBootcampsSuccess,
  getSingleBootcampFailure,
  getSingleBootcampSuccess
} from "./bootcamp.actions";

export function* fetchSingleBootcampExecute({ payload: id }) {
  try {
    // Fetching respective bootcamp and courses
    const { data: bootcamp } = yield axios.get(`/api/v1/bootcamps/${id}`);
    const { data: bootcampCourses } = yield axios.get(
      `/api/v1/bootcamps/${id}/courses`
    );

    const bootcampWithCourses = {
      ...bootcamp.data,
      courses: [...bootcampCourses.data]
    };

    yield put(getSingleBootcampSuccess(bootcampWithCourses));
  } catch (err) {
    yield put(getSingleBootcampFailure(err));
  }
}

export function* fetchBootcampsExecute() {
  try {
    const { data } = yield axios.get("/api/v1/bootcamps");

    debugger;

    yield put(getBootcampsSuccess(data.data));
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
