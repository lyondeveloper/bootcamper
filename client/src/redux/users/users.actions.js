import { apiTypes, localTypes } from "./users.types";

// State Calls
export const cleanUser = (property, value) => ({
  type: localTypes.CLEAN_USER_STATE,
  property,
  value
});

export const setCurrentUser = user => ({
  type: localTypes.SET_CURRENT_USER,
  payload: user
});

export const setHasExpired = value => ({
  type: localTypes.SET_HAS_EXPIRED,
  payload: value
});

// API Calls
export const renovateTokenStart = () => ({
  type: apiTypes.CHECK_USER_SESSION_START
});

export const renovateTokenSuccess = user => ({
  type: apiTypes.CHECK_USER_SESSION_SUCCESS,
  payload: user
});

export const renovateTokenFailure = err => ({
  type: apiTypes.CHECK_USER_SESSION_FAILURE,
  payload: err
});

export const loginUserStart = (data, history) => ({
  type: apiTypes.LOGIN_USER_START,
  payload: data,
  history
});

export const loginUserSuccess = user => ({
  type: apiTypes.LOGIN_USER_SUCCESS,
  payload: user
});

export const loginUserFailure = error => ({
  type: apiTypes.LOGIN_USER_FAILURE,
  payload: error
});

export const logoutUserStart = history => ({
  type: apiTypes.LOGOUT_USER_START,
  history
});

export const logoutUserSuccess = () => ({
  type: apiTypes.LOGOUT_USER_SUCCESS
});

export const logoutUserFailure = error => ({
  type: apiTypes.LOGOUT_USER_FAILURE,
  payload: error
});

export const registerUserStart = (data, history) => ({
  type: apiTypes.REGISTER_USER_START,
  payload: data,
  history
});

export const registerUserSuccess = () => ({
  type: apiTypes.REGISTER_USER_SUCCESS
});

export const registerUserFailure = error => ({
  type: apiTypes.REGISTER_USER_FAILURE,
  payload: error
});

export const updateUserStart = (data, history) => ({
  type: apiTypes.UPDATE_USER_START,
  payload: data,
  history
});

export const updateUserSuccess = () => ({
  type: apiTypes.UPDATE_USER_SUCCESS
});

export const updateUserFailure = error => ({
  type: apiTypes.UPDATE_USER_FAILURE,
  payload: error
});

export const updatePasswordStart = (data, history) => ({
  type: apiTypes.UPDATE_PASSWORD_START,
  payload: data,
  history
});

export const updatePasswordSuccess = () => ({
  type: apiTypes.UPDATE_PASSWORD_SUCCESS
});

export const updatePasswordFailure = error => ({
  type: apiTypes.UPDATE_PASSWORD_FAILURE,
  payload: error
});

export const forgotPasswordStart = (payload, history) => ({
  type: apiTypes.FORGOT_PASSWORD_START,
  payload,
  history
});

export const forgotPasswordSuccess = () => ({
  type: apiTypes.FORGOT_PASSWORD_SUCCESS
});

export const forgotPasswordFailure = err => ({
  type: apiTypes.FORGOT_PASSWORD_FAILURE,
  payload: err
});
