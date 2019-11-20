import { all, call } from 'redux-saga/effects';

import bootcampSagas from './bootcamps/bootcamps.sagas';

export default function* rootSaga() {
  yield all([call(bootcampSagas)]);
}
