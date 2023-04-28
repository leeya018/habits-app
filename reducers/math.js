import * as types from "../types";

const mathInitial = {
  thrills: [],
  level: 850,
};

const mathReducer = (state = mathInitial, { type, payload }) => {
  switch (type) {
    case types.ADD_THRILL:
      console.log({ payload });
      return { ...state, thrills: [...state.thrills, payload] };
    default:
      return state;
  }
};

export default mathReducer;
