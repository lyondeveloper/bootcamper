import types from './bootcamps.types';

export const getBootcampsStart = () => ({
  type: types.GET_BOOTCAMPS_START
});

export const getBootcampsFailure = error => ({
  type: types.GET_BOOTCAMPS_FAILURE,
  payload: error
});

export const getBootcampsSuccess = data => ({
  type: types.GET_BOOTCAMPS_SUCCESS,
  payload: data
});

export const getSingleBootcampStart = slug => ({
  type: types.GET_SINGLE_BOOTCAMP_START,
  payload: slug
});

export const getSingleBootcampFailure = error => ({
  type: types.GET_SINGLE_BOOTCAMP_FAILURE,
  payload: error
});

export const getSingleBootcampSuccess = data => ({
  type: types.GET_SINGLE_BOOTCAMP_SUCCESS,
  payload: data
});
