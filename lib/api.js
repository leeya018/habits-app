import axios from "axios";

export const getHabit = async (id) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/${id}`;
  const res = await axios.get(url);
  return res.data;
};
export const editHabitApi = async (habit) => {
  console.log("1");
  console.log(habit);
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/update`;
  const res = await axios.post(url, habit);

  return res.data;
};
export const addHabitApi = async (habit) => {
  console.log("1");
  console.log(habit);
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
  const res = await axios.post(url, habit);

  return res.data;
};
