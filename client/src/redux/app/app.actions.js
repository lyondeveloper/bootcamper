import { localTypes } from "./app.types";

export const setSpinner = value => ({
  type: localTypes.SET_SPINNER,
  payload: value
});

export const cleanModule = (module, initialState) => ({
  type: localTypes.CLEAN_MODULE,
  module,
  initialState
});
