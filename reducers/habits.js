import * as types from "../types";

const habitInitial = {
  categories: [],
  habits: [
    // {
    //   name: "123",
    //   description: "213",
    //   amount: "323",
    //   mainGoal: "232",
    //   id: "f6ae5557-4e85-4d68-8682-ed08b7a1ea7f",
    //   createdAt: new Date().toDateString(),
    //   amountCompletePerDay: {},
    //   category: "category1",
    // },
  ],
  error: "",
};

let newHabits = null;
const mathReducer = (state = habitInitial, { type, payload }) => {
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
    // case types.ADD_CATEGORY:
    //   return { ...state, categories: [...state.categories, payload] };
    case types.ADD_DID_AMOUNT:
      newHabits = state.habits.map((habit) => {
        if (habit.id === payload) {
          let dupHabit = { ...habit };
          const value = dupHabit.amountCompletePerDay[habit.createdAt];
          dupHabit.amountCompletePerDay[habit.createdAt] =
            value === undefined ? 0 : value + 1;
          return dupHabit;
        } else {
          return habit;
        }
      });
      return { ...state, habits: newHabits };

    case types.GET_CATEGORIES:
      return { ...state, categories: payload };

    case types.GET_HABITS:
      return { ...state, habits: payload };
    default:
      return state;
  }
};

export default mathReducer;
