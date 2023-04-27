import * as types from "./types";

export const updateSettings = (payload) => {
  return {
    type: types.UPDATE_PER_DAY,
    payload,
  };
};
