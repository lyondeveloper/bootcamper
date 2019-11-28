import types from './users.types';

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT_USER:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false
      };

    case types.REGISTER_USER_START:
    case types.LOGIN_USER_START:
      return {
        ...state,
        loading: true
      };

    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0,
        currentUser: action.payload,
        loading: false
      };

    case types.REGISTER_USER_FAILURE:
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
