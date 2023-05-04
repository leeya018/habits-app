import { combineReducers } from "redux";
import mathReducer from "./math";
import habitsReducer from "./habits";

// COMBINED REDUCERS
const reducers = {
  math: mathReducer,
  habits: habitsReducer,
};

export default combineReducers(reducers);
