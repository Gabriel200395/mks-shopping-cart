import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stateProducts, stateShoopingCart } from "../reducers";

const reducers = combineReducers({ stateProducts, stateShoopingCart });
const store = configureStore({ reducer: reducers });

export default store;
