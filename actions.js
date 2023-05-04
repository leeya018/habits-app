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
export const increaseSpeedLevel = () => (dispatch, getState) => {
  const { speedLevel } = getState().math;
  const lim = 10;
  if (speedLevel > lim) {
    dispatch({
      type: "",
    });
  } else {
    dispatch({
      type: types.INCREASE_SPEED_LEVEL,
    });
  }
};
export const resetGame = () => {
  const startLevel = 700;

  const payload = {
    thrills: [],
    level: startLevel,
    points: 0,
    timerInterAddThrill: 3000,
    timerInterProgress: 500,
    progress: 30,
    result: "",
    stop: false,
    gameOver: false,
  };
  return {
    type: types.RESET_GAME,
    payload,
  };
};

// ===========================

export const addHabit = (payload) => {
  return {
    type: types.ADD_HABIT,
    payload,
  };
};
export const deleteHabit = (payload) => {
  return {
    type: types.REMOVE_HABIT,
    payload,
  };
};
export const editHabit = (payload) => {
  return {
    type: types.EDIT_HABIT,
    payload,
  };
};
export const updateError = (payload) => {
  return {
    type: types.UPDATE_ERROR,
    payload,
  };
};
export const addDidAmount = (id) => {
  return {
    type: types.ADD_DID_AMOUNT,
    payload: id,
  };
};
export const addCategory = (name) => {
  return {
    type: types.ADD_CATEGORY,
    payload: name,
  };
};
