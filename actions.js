import { createThrill, randLeft } from "@/util";
import * as types from "./types";

export const addThrill = () => {
  const thrill = createThrill();

  const thrillItem = {
    thrill,
    result: Math.floor(Math.abs(eval(thrill))),
    position: { top: 0, left: randLeft() },
  };

  return {
    type: types.ADD_THRILL,
    payload: thrillItem,
  };
};

export const addLevel = () => {
  return {
    type: types.ADD_LEVEL,
  };
};
export const addPoints = (payload = 1) => {
  return {
    type: types.ADD_POINTS,
    payload,
  };
};
export const removeThrill = (payload = 11) => {
  return {
    type: types.REMOVE_THRILL,
    payload,
  };
};
export const updateResult = (payload = "") => {
  return {
    type: types.UPDATE_RESULT,
    payload,
  };
};
export const updatePositions = () => (dispatch, getState) => {
  const { thrills, progress, level } = getState().math;
  const newThrills = thrills.map((thrill) => {
    let dupPosition = thrill.position;
    dupPosition.top += progress;
    if (dupPosition.top + progress >= level) {
      // alert("done");
      dispatch({
        type: types.UPDATE_STOP,
        payload: true,
      });
    }
    return { ...thrill, position: dupPosition };
  });
  dispatch({
    type: types.UPDATE_POSITIONS,
    payload: newThrills,
  });
};

export const updateStop = (payload) => (dispatch, getState) => {
  dispatch({
    type: types.UPDATE_STOP,
    payload,
  });
};
export const clearThrills = () => {
  return {
    type: types.CLEAR_THRILLS,
  };
};
export const updateGameOver = (payload) => {
  return {
    type: types.UPDAET_GAME_OVER,
    payload,
  };
};
export const resetLevl = () => {
  return {
    type: types.RESET_LEVEL,
  };
};
