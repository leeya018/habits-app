import * as types from "../types";

const habitInitial = {
  categories: [],
  habits: [],
  error: "",
  chosenCategory: "",
};

let newHabits = null;
const habitReducer = (state = habitInitial, { type, payload }) => {
  console.log({ type });
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

    case types.REMOVE_HABIT:
      newHabits = state.habits.filter((habit) => habit.id !== payload);
      return { ...state, habits: newHabits };

    case types.UPDATE_ERROR:
      return { ...state, error: payload };
    // case types.ADD_DID_AMOUNT:
    //   newHabits = state.habits.map((habit) => {
    //     if (habit.id === payload) {
    //       let dupHabit = { ...habit };
    //       const value = dupHabit.traces[habit.createdAt];
    //       dupHabit.traces[habit.createdAt] =
    //         value === undefined ? 0 : value + 1;
    //       return dupHabit;
    //     } else {
    //       return habit;
    //     }
    //   });
    //   return { ...state, habits: newHabits };
    case types.ADD_DID_AMOUNT:
      return { ...state, habits: newHabits };
    case types.GET_CATEGORIES:
      return { ...state, categories: payload };

    case types.GET_HABITS:
      return { ...state, habits: payload };
    case types.UPDATE_COSEN_CATEGORY:
      return { ...state, chosenCategory: payload };
    default:
      return state;
  }
};

export default habitReducer;
