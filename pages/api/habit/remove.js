import nc from "next-connect";
import fs from "fs";
import { removeHabit } from "lib/db";

const handler = nc({ attachParams: true });
handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const doc = await removeHabit(id);
    if (doc === null) {
      throw new Error("no doc is found");
    }
    return res.status(200).send("habit was removed");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});
export default handler;
