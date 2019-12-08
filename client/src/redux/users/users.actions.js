import {apiTypes, localTypes} from "./users.types";

// State Calls
export const cleanUser = (property, value) => ({
  type: localTypes.CLEAN_USER_STATE,
  property,
  value
})

export const logoutUser = () => ({
  type: localTypes.LOGOUT_USER
});

export const setCurrentUser = user => ({
  type: localTypes.SET_CURRENT_USER,
  payload: user
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
  type: apiTypes.UPDATE_USER_SUCCESS,
});

export const updateUserFailure = error => ({
  type: apiTypes.UPDATE_USER_FAILURE,
  payload: error
});
