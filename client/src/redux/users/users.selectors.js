import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUserState],
  user => user.currentUser
);

export const selectUserTokenInformation = createSelector(
  [selectCurrentUser],
  user => user.tokenInfo
);

export const selectError = createSelector(
  [selectUserState],
  user => user.error
);
