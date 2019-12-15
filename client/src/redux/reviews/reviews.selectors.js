import { createSelector } from "reselect";

const reviewState = state => state.reviews;

export const selectReviews = createSelector(
  [reviewState],
  reviews => reviews.reviews
);

export const selectError = createSelector(
  [reviewState],
  reviews => reviews.error
);

export const selectLoading = createSelector(
  [reviewState],
  reviews => reviews.loading
);
