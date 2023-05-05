import nc from "next-connect";
import fs from "fs";
import { addHabit } from "lib/db";

const handler = nc({ attachParams: true });
handler.post(async (req, res) => {
  const { habit } = req.body;
  const hasAdded = await addHabit(habit);
  return res.status(200).send(hasAdded);
});
export default handler;
