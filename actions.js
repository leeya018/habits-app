import * as UTIL from "@/util";
import * as types from "./types";
import axios from "axios";

import * as API from "lib/api";

export const addThrill = () => {
  const thrill = UTIL.createThrill();

  const thrillItem = {
    thrill,
    result: Math.floor(Math.abs(eval(thrill))),
    position: { top: 0, left: UTIL.randLeft() },
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
export const getHabits = (goal) => async (dispatch, getState) => {
  const habits = await API.getHabits(goal);
  dispatch({
    type: types.GET_HABITS,
    payload: habits,
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

export const addHabit = (habit) => async (dispatch) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
  try {
    const newHabit = await API.addHabit(habit);
    dispatch(getHabitsByGoal(habit.goal));
  } catch (error) {
    console.log("addHabit error: ");
    console.log(error);
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message + " ====> " + error.response?.data,
    });
  }
};

export const deleteHabit = (id, goal) => async (dispatch) => {
  try {
    const isDeleted = await API.deleteHabit(id);
    dispatch(getHabits(goal));
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message,
    });
  }
};
export const updateChosenGoal = (goalName) => {
  return {
    type: types.UPDATE_COSEN_CATEGORY,
    payload: goalName,
  };
};
export const editHabit = (habit) => async (dispatch, getState) => {
  await API.editHabit(habit);
  dispatch(getHabitsByGoal(habit.goal));

  try {
    dispatch({
      type: types.EDIT_HABIT, //not doign a thing  - no therer e
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message,
    });
  }

  return {};
};
export const updateError = (payload) => {
  return {
    type: types.UPDATE_ERROR,
    payload,
  };
};

const createNewTrace = (amountToAdd) => {
  return {
    date: new Date(),
    amount: 1,
    improve: "",
    reserve: "",
    learn: "",
  };
};
// no good
// export const addDidAmount = (habit, amountToAdd) => async (dispatch) => {
//   const dupHabit = { ...habit };
//   if (!dupHabit.traces || dupHabit.traces.length === 0) {
//     dupHabit.traces = [];
//     dupHabit.traces.push(createNewTrace(amountToAdd));
//   } else {
//     const len = dupHabit.traces.length;
//     if (UTIL.datesAreEquals(dupHabit.traces[len - 1].date, new Date())) {
//       dupHabit.traces[len - 1].amount += amountToAdd;
//     }
//   }
//   try {
//     const data = await API.editHabit(dupHabit);
//     dispatch(getHabitsByGoal(habit.goal));
//     console.log({ dupHabit });
//     dispatch({
//       type: types.UPDATE_HABIT,
//       payload: dupHabit,
//     });
//   } catch (error) {
//     dispatch({
//       type: types.UPDATE_ERROR,
//       payload: error.message,
//     });
//   }
// };
export const addGoal = (goal) => async (dispatch, getState) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + "/api/goal/add";
  try {
    if (!goal.name || !goal.description) {
      throw new Error("goal must be set");
    }
    await API.addGoal(goal);
    const goals = await API.getGoals();
    dispatch({
      type: types.GET_CATEGORIES,
      payload: goals,
    });

    /////////////////
  } catch (error) {
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message,
    });
  }
};

export const getCategories = () => async (dispatch) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + "/api/goals";
  try {
    const res = await axios.get(url);
    dispatch({
      type: types.GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message,
    });
  }
};
export const getHabitsByGoal = (goal) => async (dispatch) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + "/api/habit";
  try {
    const res = await axios.get(url, {
      params: { goal },
    });
    dispatch({
      type: types.GET_HABITS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message,
    });
  }
};
