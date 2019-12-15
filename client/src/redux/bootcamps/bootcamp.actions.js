import { apiTypes, localTypes } from "./bootcamps.types";

// local actions
export const onGlobalChange = (module, submodule, property, payload) => ({
  type: localTypes.ON_CHANGE,
  module,
  submodule,
  property,
  payload
});

// api actions
export const getBootcampsStart = () => ({
  type: apiTypes.GET_BOOTCAMPS_START
});

export const getBootcampsFailure = error => ({
  type: apiTypes.GET_BOOTCAMPS_FAILURE,
  payload: error
});

export const getBootcampsSuccess = data => ({
  type: apiTypes.GET_BOOTCAMPS_SUCCESS,
  payload: data
});

export const getSingleBootcampStart = id => ({
  type: apiTypes.GET_SINGLE_BOOTCAMP_START,
  payload: id
});

export const getSingleBootcampFailure = error => ({
  type: apiTypes.GET_SINGLE_BOOTCAMP_FAILURE,
  payload: error
});

export const getSingleBootcampSuccess = data => ({
  type: apiTypes.GET_SINGLE_BOOTCAMP_SUCCESS,
  payload: data
});

export const addBootcampStart = (payload, history) => ({
  type: apiTypes.ADD_BOOTCAMP_START,
  payload,
  history
});

export const addBootcampFailure = error => ({
  type: apiTypes.ADD_BOOTCAMP_FAILURE,
  payload: error
});

export const addBootcampSuccess = () => ({
  type: apiTypes.ADD_BOOTCAMP_SUCCESS
});
