import * as types from "../types";
const levelUp = 50;

const mathInitial = {
  thrills: [],
  level: 700,
  points: 0,
  timerInterAddThrill: 3000,
  timerInterProgress: 500,
  progress: 20,
  result: "",
  stop: false,
};

const mathReducer = (state = mathInitial, { type, payload }) => {
  switch (type) {
    case types.ADD_THRILL:
      return { ...state, thrills: [...state.thrills, payload] };
    case types.ADD_LEVEL:
      return { ...state, level: state.level - levelUp };
    case types.ADD_POINTS:
      return { ...state, points: state.points + payload };
    case types.REMOVE_THRILL:
      console.log({ payload });
      const newThrills = state.thrills.filter(
        (thrill) => Number(thrill.result) !== Number(payload)
      );
      return { ...state, thrills: newThrills };
    case types.UPDATE_RESULT:
      return { ...state, result: payload };
    case types.UPDATE_POSITIONS:
      return { ...state, thrills: payload };
    case types.UPDATE_STOP:
      return { ...state, stop: payload };
    default:
      return state;
  }
};

export default mathReducer;
