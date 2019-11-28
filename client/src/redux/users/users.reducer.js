import types from "./users.types";

const initialState = {
  currentUser: {},
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
