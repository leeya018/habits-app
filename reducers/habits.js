import * as types from "../types";
import { minLevel } from "@/util";
const levelUp = 50;
const startLevel = 700;

// const habitsItem = {
//   id:""
//   name: ""
//   description: ""
//   amount: ""
//   percentComple: ""
//   createdAt: ""
//   mainGoal: ""

// }
const habitInitial = {
  habits: [],
  error: "",
};

let newHabits = null;
const mathReducer = (state = habitInitial, { type, payload }) => {
  switch (type) {
    case types.ADD_HABIT:
      return { ...state, habits: [...state.habits, payload] };
    case types.UPDATE_HABIT:
      newHabits = state.habits.map((habit) =>
        habit.id === payload ? { ...habit, payload } : habit
      );
      return { ...state, habits: newHabits };
    case types.ADD_AMOUNT_TO_HABIT:
      newHabits = state.habits.map((habit) =>
        habit.id === payload ? { ...habit, amount: habit.amount + 1 } : habit
      );
      return { ...state, habits: newHabits };

    case types.DELET_HABIT:
      newHabits = state.habits.filter((habit) => habit.id !== payload);
      return { ...state, habits: newHabits };

    case types.UPDATE_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default mathReducer;
