import User from "models/User";
import dbConnect from "./dbConnect";
import moment from "moment";

export const addUesr = async (user) => {
  try {
    await dbConnect();
    const res = await User.create({ ...user, createdAt: moment() });
    return res.acknowledged;
  } catch (error) {
    throw error;
  }
};
export const getUsersFilter = async (commandType, startDate, endDate) => {
  const filter = {
    createdAt: { $gte: startDate, $lte: endDate },
    ...(commandType !== "all" && { commandType }),
  };
  try {
    await dbConnect();
    const res = await User.find(filter);
    return res;
  } catch (error) {
    throw error;
  }
};
