import nc from "next-connect";
import fs from "fs";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });
handler.get(async (req, res) => {
  const { category } = req.query;
  try {
    const habits = await DB.getHabitsByCategory(category);
    return res.status(200).send(habits);
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
