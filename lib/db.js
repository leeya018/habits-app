import Category from "models/Category";
import dbConnect from "./dbConnect";
import moment from "moment";

export const addCategory = async (category) => {
  try {
    await dbConnect();
    console.log(category);
    const res = await Category.create(category);
    return res.acknowledged;
    return 1;
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
