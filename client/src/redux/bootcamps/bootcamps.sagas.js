import { takeLatest, put, call, all } from "redux-saga/effects";

import axios from "axios";

import { apiTypes } from "./bootcamps.types";

import {
  getBootcampsFailure,
  getBootcampsSuccess,
  getSingleBootcampFailure,
  getSingleBootcampSuccess,
  addBootcampFailure,
  addBootcampSuccess
} from "./bootcamp.actions";

import { privateRequest } from "../../utils/functions";
import { toast } from "react-toastify";

export function* addBootcamp({ payload, history }) {
  try {
    const { step1, step2 } = payload;

    const data = {
      ...step1,
      ...step2
    };

    yield privateRequest(`/api/v1/bootcamps`, data, "POST");

    yield put(addBootcampSuccess());

    toast.success("Bootcamp created succesfully!");

    debugger;
  } catch (error) {
    yield put(addBootcampFailure(error));
  }
}

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

    yield put(getBootcampsSuccess(data.data));
  } catch (err) {
    yield put(getBootcampsFailure(err));
  }
}

export function* addBootcampListener() {
  yield takeLatest(apiTypes.ADD_BOOTCAMP_START, addBootcamp);
}

export function* fetchBootcampsListener() {
  yield takeLatest(apiTypes.GET_BOOTCAMPS_START, fetchBootcampsExecute);
}

export function* fetchSingleBootcampListener() {
  yield takeLatest(
    apiTypes.GET_SINGLE_BOOTCAMP_START,
    fetchSingleBootcampExecute
  );
}

export default function* bootcampSagas() {
  yield all([
    call(fetchBootcampsListener),
    call(fetchSingleBootcampListener),
    call(addBootcampListener)
  ]);
}
