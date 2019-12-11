import { apiTypes } from './reviews.types';

const initialState = {
  reviews: [],
  singleReview: {},
  error: '',
  loading: false
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {

    case apiTypes.ADD_REVIEW_START:
    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_START:
      return {
        ...state,
        loading: true
      }

    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload
      }

    case apiTypes.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case apiTypes.ADD_REVIEW_FAILURE:
    case apiTypes.GET_REVIEWS_BY_BOOTCAMP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}
