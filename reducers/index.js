import { combineReducers } from "redux";
import settingsReducer from "./settings";

// COMBINED REDUCERS
const reducers = {
  settings: settingsReducer,
};

export default combineReducers(reducers);
