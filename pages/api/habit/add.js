import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });
handler.post(async (req, res) => {
  const habit = req.body;
  try {
    const hasAdded = await DB.addHabit(habit);
    return res.status(200).send("habit was added");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
