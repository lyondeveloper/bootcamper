import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./app/app.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "bootcamps", "reviews"]
};

export default persistReducer(persistConfig, rootReducer);
