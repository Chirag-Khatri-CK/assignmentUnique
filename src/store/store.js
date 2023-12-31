import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";

const rootReducer = combineReducers({
  user: userReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});
