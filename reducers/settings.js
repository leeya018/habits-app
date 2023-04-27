import * as types from "../types";

const settingsInitial = {
  matchesPerDay: 33,
  likesPerDay: 20,
  amountOfSessionsPerDay: 1,
};

const settingsReducer = (state = settingsInitial, { type, payload }) => {
  switch (type) {
    case types.UPDATE_PER_DAY:
      console.log({ payload });
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default settingsReducer;
