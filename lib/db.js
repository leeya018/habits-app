import Category from "models/Category";
import Habit from "models/Habit";
import dbConnect from "./dbConnect";
import moment from "moment";

export const addCategory = async (category) => {
  try {
    await dbConnect();
    console.log(category);
    const res = await Category.create(category);
    return res.acknowledged;
  } catch (error) {
    throw error;
  }
};

export const addHabit = async (habit) => {
  try {
    await dbConnect();
    console.log(habit);
    const newHabit = new Habit(habit);
    const res = await newHabit.save();
    return res.acknowledged;
  } catch (error) {
    throw error;
  }
};
export const updateHabit = async (habit) => {
  try {
    await dbConnect();
    console.log(habit);
    const updatedDoc = await Habit.findOneAndUpdate({ _id: habit._id }, habit, {
      new: true,
    });
    if (updatedDoc) {
      return true;
    }
    throw new Error("doc is not found");
  } catch (error) {
    throw error;
  }
};

export const getHabitsByCategory = async (category) => {
  try {
    await dbConnect();
    const res = await Habit.find({ category });
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    await dbConnect();
    const res = await Category.find({});
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};
export const getCategorysFilter = async (commandType, startDate, endDate) => {
  const filter = {
    createdAt: { $gte: startDate, $lte: endDate },
    ...(commandType !== "all" && { commandType }),
  };
  try {
    await dbConnect();
    const res = await Category.find(filter);
    return res;
  } catch (error) {
    throw error;
  }
};
