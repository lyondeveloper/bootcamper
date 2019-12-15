import { apiTypes, localTypes } from "./reviews.types";

export const changeReviewState = (property, value) => ({
  type: localTypes.CHANGE_REVIEW_STATE,
  property,
  value
});

export const getReviewsByBootcampStart = filter => ({
  type: apiTypes.GET_REVIEWS_BY_BOOTCAMP_START,
  payload: filter
});

export const getReviewsByBootcampSuccess = data => ({
  type: apiTypes.GET_REVIEWS_BY_BOOTCAMP_SUCCESS,
  payload: data
});

export const getReviewsByBootcampFailure = err => ({
  type: apiTypes.GET_REVIEWS_BY_BOOTCAMP_FAILURE,
  payload: err
});

export const addReviewStart = (data, history) => ({
  type: apiTypes.ADD_REVIEW_START,
  payload: data,
  history
});

export const addReviewSuccess = () => ({
  type: apiTypes.ADD_REVIEW_SUCCESS
});

export const addReviewFailure = err => ({
  type: apiTypes.ADD_REVIEW_FAILURE,
  payload: err
});
