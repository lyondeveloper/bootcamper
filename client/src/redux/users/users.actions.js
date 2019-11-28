import types from "./users.types";

export const loginUserStart = data => ({
  type: types.LOGIN_USER_START,
  payload: data
});

export const loginUserSuccess = user => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user
});

export const loginUserFailure = error => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error
});

export const registerUserStart = data => ({
  type: types.REGISTER_USER_START,
  payload: data
});

export const registerUserSuccess = () => ({
  type: types.REGISTER_USER_SUCCESS
});

export const registerUserFailure = error => ({
  type: types.REGISTER_USER_FAILURE,
  payload: error
});
