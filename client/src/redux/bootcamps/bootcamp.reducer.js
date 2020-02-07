import { apiTypes, localTypes } from "./bootcamps.types";
import produce from "immer";
import { initialState } from "./bootcamp.model";

export const bootcampInitialState = initialState;

export default (state = bootcampInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case localTypes.ON_CHANGE: {
        const { module, submodule, property, payload } = action;

        draft[module][submodule][property] = payload;

        break;
      }

      case apiTypes.ADD_BOOTCAMP_START:
      case apiTypes.GET_SINGLE_BOOTCAMP_START:
      case apiTypes.GET_BOOTCAMPS_START:
        draft.loading = true;
        draft.error = null;

        break;

      case apiTypes.GET_BOOTCAMPS_SUCCESS:
        draft.bootcamps = action.payload;
        draft.loading = false;
        draft.error = null;

        break;

      case apiTypes.GET_SINGLE_BOOTCAMP_SUCCESS:
        draft.singleBootcamp = action.payload;
        draft.loading = false;
        draft.error = null;

        break;

      case apiTypes.ADD_BOOTCAMP_FAILURE:
      case apiTypes.GET_BOOTCAMPS_FAILURE:
      case apiTypes.GET_SINGLE_BOOTCAMP_FAILURE:
        draft.loading = false;
        draft.error = action.payload;

        break;

      default:
        return draft;
    }
  });
