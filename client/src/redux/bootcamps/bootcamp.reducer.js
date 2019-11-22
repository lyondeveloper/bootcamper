import types from './bootcamps.types';

const initialState = {
  bootcamps: [],
  singleBootcamp: {},
  loading: false,
  error: null
};

export default function bootcampReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SINGLE_BOOTCAMP_START:
    case types.GET_BOOTCAMPS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.GET_BOOTCAMPS_SUCCESS:
      return {
        ...state,
        bootcamps: action.payload,
        loading: false,
        error: null
      };

    case types.GET_SINGLE_BOOTCAMP_SUCCESS:
      return {
        ...state,
        singleBootcamp: action.payload,
        loading: false
      };

    case types.GET_BOOTCAMPS_FAILURE:
    case types.GET_SINGLE_BOOTCAMP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
