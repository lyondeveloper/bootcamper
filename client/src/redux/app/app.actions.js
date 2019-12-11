import { localTypes } from "./app.types";

export const setSpinner = value => ({
  type: localTypes.SET_SPINNER,
  payload: value
});
