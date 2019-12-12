import { localTypes } from "./app.types";

const initialState = {
  spinnerActivated: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case localTypes.SET_SPINNER:
      return {
        ...state,
        spinnerActivated: action.payload
      };

    default:
      return state;
  }
}
