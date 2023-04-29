import * as types from "../types";
const levelUp = 100;

const mathInitial = {
  thrills: [],
  level: 850,
};

const mathReducer = (state = mathInitial, { type, payload }) => {
  switch (type) {
    case types.ADD_THRILL:
      console.log({ payload });
      return { ...state, thrills: [...state.thrills, payload] };
    case types.ADD_LEVEL:
      return { ...state, level: state.level - levelUp };
    default:
      return state;
  }
};

export default mathReducer;
