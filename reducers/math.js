import * as types from "../types";
import { minLevel } from "@/util";
const levelUp = 50;
const startLevel = 700;

const mathInitial = {
  thrills: [],
  level: startLevel,
  points: 0,
  timerInterAddThrill: 3000,
  timerInterProgress: 1000,
  speedLevel: 1,
  progress: 10,
  result: "",
  stop: false,
  gameOver: false,
  speedLevel: 1,
};

const mathReducer = (state = mathInitial, { type, payload }) => {
  switch (type) {
    case types.ADD_THRILL:
      return { ...state, thrills: [...state.thrills, payload] };
    case types.ADD_LEVEL:
      let gameOver = state.gameOver;
      if (state.level - levelUp === startLevel - 150) {
        gameOver = true;
      }
      return { ...state, level: state.level - levelUp, gameOver };
    case types.ADD_POINTS:
      return { ...state, points: state.points + payload };
    case types.REMOVE_THRILL:
      console.log({ payload });
      const newThrills = state.thrills.filter(
        (thrill) => Number(thrill.result) !== Number(payload)
      );
      return { ...state, thrills: newThrills, points: state.points + 1 };
    case types.UPDATE_RESULT:
      return { ...state, result: payload };
    case types.UPDATE_POSITIONS:
      return { ...state, thrills: payload };
    case types.UPDATE_STOP:
      return { ...state, stop: payload };
    case types.CLEAR_THRILLS:
      return { ...state, thrills: [] };
    case types.UPDAET_GAME_OVER:
      return { ...state, gameOver: payload };
    case types.RESET_LEVEL:
      return { ...state, level: startLevel };
    case types.INCREASE_SPEED_LEVEL:
      return { ...state, speedLevel: state.speedLevel + 1 };
    case types.RESET_GAME:
      console.log(payload);
      return { ...payload };
    default:
      return state;
  }
};

export default mathReducer;
