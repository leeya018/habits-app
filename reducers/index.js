import { combineReducers } from "redux";
import mathReducer from "./math";

// COMBINED REDUCERS
const reducers = {
  math: mathReducer,
};

export default combineReducers(reducers);
