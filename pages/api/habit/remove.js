import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });
handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const doc = await DB.removeHabit(id);
    console.log("removeHabit");
    console.log(doc);
    if (doc === null) {
      throw new Error("no doc is found");
    }
    return res.status(200).send("habit was removed");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
