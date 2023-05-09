import axios from "axios";

export const getHabit = async (id) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/${id}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
    // throw new Error(error.message);
  }
};
export const editHabit = async (habit) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/update`;
  const res = await axios.post(url, habit);

  return res.data;
};
export const addHabit = async (habit) => {
  const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
  const res = await axios.post(url, habit);

  return res.data;
};
// export const deleteHabit = async (habit) => {
//   console.log("1");
//   console.log(habit);
//   const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
//   const res = await axios.post(url, habit);

//   return res.data;
// };
