import * as types from "./types";
import axios from "axios";

import * as API from "lib/api";
import * as UTIL from "@/util";

export const addHabit = (habit) => async (dispatch) => {
  const url = UTIL.getUrl() + `/api/habit/add`;
  try {
    dispatch({
      type: types.ADD_HABIT,
      payload: habit,
    });
    API.addHabit(habit);
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
    dispatch({
      type: types.REMOVE_HABIT,
      payload: id,
    });
    API.deleteHabit(id);
  } catch (error) {
    console.log("deleteHabit ->" + error.message);
    dispatch({
      type: types.UPDATE_ERROR,
      payload: error.message + " => " + error.response?.data,
    });
  }
};

export const editHabit = (habit) => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.EDIT_HABIT, //not doign a thing  - no therer e
      payload: habit,
    });
    API.editHabit(habit);
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

export const addGoal = (goal) => async (dispatch, getState) => {
  const url = UTIL.getUrl() + "/api/goal/add";
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
  const url = UTIL.getUrl() + "/api/goals";
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
  const url = UTIL.getUrl() + "/api/habit";
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
export const updateChosenGoal = (goal) => {
  return {
    type: types.UPDATE_CHOSEN_GOAL,
    payload: goal,
  };
};
