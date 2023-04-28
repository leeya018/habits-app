import { createThrill, randLeft } from "@/util";
import * as types from "./types";

export const addThrill = () => {
  const thrill = createThrill();
  const randL = randLeft();
  console.log(randL);

  const thrillItem = { thrill, result: eval(thrill), left: randL };

  return {
    type: types.ADD_THRILL,
    payload: thrillItem,
  };
};
