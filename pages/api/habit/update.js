import nc from "next-connect";
import fs from "fs";
import { updateHabit } from "lib/db";

const handler = nc({ attachParams: true });
handler.post(async (req, res) => {
  const habit = req.body;
  try {
    const result = await updateHabit(habit);
    return res.status(200).send("habit was updated");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
