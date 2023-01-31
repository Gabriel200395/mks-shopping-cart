import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { stateProducts, stateShoopingCart } from "../reducers";
import logger from "../logger/loggerApplicationGlobal";

const middleware = [...getDefaultMiddleware(), logger];
const reducers = combineReducers({ stateProducts, stateShoopingCart });
const store = configureStore({ reducer: reducers,  middleware});

export default store;
