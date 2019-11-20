import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import bootcampsReducer from './bootcamps/bootcamp.reducer';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  bootcamps: bootcampsReducer
});

export default persistReducer(persistConfig, rootReducer);
