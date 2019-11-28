import { all, call } from "redux-saga/effects";

import bootcampSagas from "./bootcamps/bootcamps.sagas";
import userSagas from "./users/users.saga";

export default function* rootSaga() {
  yield all([call(bootcampSagas), call(userSagas)]);
}
