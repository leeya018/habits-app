import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });
handler.get(async (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  try {
    const habit = await DB.getHabit(id);
    if (!habit) {
      throw new Error("habit is not on db");
    }
    return res.status(200).send(habit);
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
