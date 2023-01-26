import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stateProducts } from "../reducers";

const reducers = combineReducers({ stateProducts });
const store = configureStore({ reducer: reducers });

export default store;
