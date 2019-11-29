import types from './users.types';

export const logoutUser = () => ({
  type: types.LOGOUT_USER
});

export const setCurrentUser = user => ({
  type: types.LOGOUT_USER,
  payload: user
});

export const checkUserSessionStart = () => ({
  type: types.CHECK_USER_SESSION_START
});

export const checkUserSessionSuccess = user => ({
  type: types.CHECK_USER_SESSION_SUCCESS,
  payload: user
});

export const checkUserSessionFailure = err => ({
  type: types.CHECK_USER_SESSION_FAILURE,
  payload: err
});

export const loginUserStart = (data, history) => ({
  type: types.LOGIN_USER_START,
  payload: data,
  history
});

export const loginUserSuccess = user => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user
});

export const loginUserFailure = error => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error
});

export const registerUserStart = (data, history) => ({
  type: types.REGISTER_USER_START,
  payload: data,
  history
});

export const registerUserSuccess = () => ({
  type: types.REGISTER_USER_SUCCESS
});

export const registerUserFailure = error => ({
  type: types.REGISTER_USER_FAILURE,
  payload: error
});
