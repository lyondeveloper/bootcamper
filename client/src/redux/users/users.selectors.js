import { createSelector } from "reselect";

const selectUserState = state => state.users;

export const selectCurrentUser = createSelector(
  [selectUserState],
  users => users.currentUser
);

export const selectLoading = createSelector(
  [selectUserState],
  users => users.loading
);

export const selectUserTokenInformation = createSelector(
  [selectCurrentUser],
  users => users.tokenInfo
);

export const selectError = createSelector(
  [selectUserState],
  users => users.error
);

export const selectHasExpired = createSelector(
  [selectUserState],
  users => users.hasExpired
);
