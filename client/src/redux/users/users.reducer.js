import { apiTypes, localTypes } from './users.types';

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case localTypes.CLEAN_USER_STATE:
      const { property, value } = action;

      const newState = {
        ...state,
        [property]: value
      }
      return {
        ...newState
      };

    case localTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true
      };

    case apiTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false
      };

    case apiTypes.UPDATE_PASSWORD_START:
    case apiTypes.UPDATE_USER_START:
    case apiTypes.REGISTER_USER_START:
    case apiTypes.LOGIN_USER_START:
    case apiTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        loading: true
      };

    case apiTypes.UPDATE_PASSWORD_FAILURE:
    case apiTypes.UPDATE_USER_FAILURE:
    case apiTypes.REGISTER_USER_FAILURE:
    case apiTypes.LOGIN_USER_FAILURE:
    case apiTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case apiTypes.UPDATE_PASSWORD_SUCCESS:
    case apiTypes.FORGOT_PASSWORD_SUCCESS:
    case apiTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case apiTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case apiTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0,
        currentUser: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
