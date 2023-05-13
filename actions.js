import * as types from "./types";
import axios from "axios";

import * as API from "lib/api";

export const addHabit = (habit) => async (dispatch) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
  try {
    API.addHabit(habit);

    dispatch({
      type: types.ADD_HABIT,
      payload: habit,
    });
  } catch (error) {
    console.log("addHabit error: ");
    console.log(error);
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message + " ====> " + error.response?.data,
    });
  }
};

export const getHabits = (category) => async (dispatch, getState) => {
  const habits = await API.getHabits(category);
  dispatch({
    type: types.GET_HABITS,
    payload: habits,
  });
};

export const deleteHabit = (id, goal) => async (dispatch) => {
  try {
    const isDeleted = await API.deleteHabit(id);
    dispatch(getHabits(goal));
  } catch (error) {
    console.log("deleteHabit ->" + error.message);
    console.log("deleteHabit ->" + error.message);
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message + " => " + error.response?.data,
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
export const addGoal = (goal) => async (dispatch, getState) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + "/api/goal/add";
  try {
    if (!goal.name || !goal.description) {
      throw new Error("goal must be set");
    }

    API.addGoal(goal);
    dispatch({
      type: types.ADD_GOAL,
      payload: goal,
    });
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

export const updateModalShow = (isShow) => {
  return {
    type: types.SHOW_MODAL,
    payload: isShow,
  };
};

export const updateChosenHabit = (chosenHabit) => {
  return {
    type: types.UPDATE_CHOSEN_HABIT,
    payload: chosenHabit,
  };
};
