import produce from "immer";
import { combineReducers } from "redux";
import bootcampsReducer from "../bootcamps/bootcamp.reducer";
import usersReducer from "../users/users.reducer";
import reviewsReducer from "../reviews/reviews.reducer";

import { localTypes } from "./app.types";

const appReducer = combineReducers({
  bootcamps: bootcampsReducer,
  users: usersReducer,
  reviews: reviewsReducer
});

const rootReducer = (state, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case localTypes.CLEAN_MODULE: {
        const { module, initialState } = action;

        draftState[module] = initialState;

        break;
      }

      default:
        return appReducer(state, action);
    }
  });

export default rootReducer;
