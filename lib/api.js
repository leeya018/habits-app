import axios from "axios";

export const getHabit = async (id) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/${id}`;
  const res = await axios.get(url);
  return res.data;
};
export const editHabit = async (habit) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/update`;
  const res = await axios.post(url, habit);

  return res.data;
};
