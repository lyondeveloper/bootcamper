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
