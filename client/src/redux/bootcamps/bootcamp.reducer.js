import { apiTypes, localTypes } from './bootcamps.types';

import { initialState } from './bootcamp.model';

const bootcampInitialState = { ...initialState };

export default function bootcampReducer(state = bootcampInitialState, action) {
  switch (action.type) {
    case apiTypes.GET_SINGLE_BOOTCAMP_START:
    case apiTypes.GET_BOOTCAMPS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case apiTypes.GET_BOOTCAMPS_SUCCESS:
      return {
        ...state,
        bootcamps: action.payload,
        loading: false,
        error: null
      };

    case apiTypes.GET_SINGLE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        singleBootcamp: action.payload,
        loading: false,
        error: null
      };

    case apiTypes.GET_BOOTCAMPS_FAILURE:
    case apiTypes.GET_SINGLE_BOOTCAMP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
