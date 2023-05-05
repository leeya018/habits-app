import nc from "next-connect";
import fs from "fs";
import { getHabitsByCategory } from "lib/db";

const handler = nc({ attachParams: true });
handler.post(async (req, res) => {
  const { category } = req.query;

  const habits = await getHabitsByCategory(category);
  return res.status(200).send(habits);
});
export default handler;
