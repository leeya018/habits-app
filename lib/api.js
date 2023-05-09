import axios from "axios";

export const getHabits = async (category) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit`;
    console.log("getHabits api");
    console.log(category);
    const res = await axios.get(url, { params: { category } });
    console.log({ res });
    return res.data;
  } catch (error) {
    console.log(error.message);
    // throw new Error(error.message);
  }
};
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
  try {
    const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/update`;
    const res = await axios.post(url, habit);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const addHabit = async (habit) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASIC_URL + `/api/habit/add`;
    const res = await axios.post(url, habit);

    return res.data;
  } catch (error) {
    throw error;
  }
};
export const deleteHabit = async (id) => {
  try {
    const urlDelete = process.env.NEXT_PUBLIC_BASIC_URL + "/api/habit/remove";

    const hasDeleted = await axios.delete(urlDelete, {
      params: { id },
    });

    return hasDeleted;
  } catch (error) {
    throw new Error(error.message);
  }
};
