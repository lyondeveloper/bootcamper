import { apiTypes, localTypes } from "./reviews.types";

const initialState = {
  reviews: [],
  singleReview: {},
  error: "",
  loading: false
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case localTypes.CHANGE_REVIEW_STATE:
      const { property, value } = action;

      const newState = {
        ...state,
        [property]: value
      };
      return {
        ...newState
      };

    case apiTypes.ADD_REVIEW_START:
    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_START:
      return {
        ...state,
        loading: true
      };

    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload
      };

    case apiTypes.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case apiTypes.ADD_REVIEW_FAILURE:
    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
