import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import bootcampsReducer from './bootcamps/bootcamp.reducer';
import usersReducer from './users/users.reducer';
import reviewsReducer from './reviews/reviews.reducer';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'bootcamps']
};

const rootReducer = combineReducers({
  bootcamps: bootcampsReducer,
  user: usersReducer,
  reviews: reviewsReducer
});

export default persistReducer(persistConfig, rootReducer);
