import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });
handler.get(async (req, res) => {
  const data = await DB.getCategories();
  return res.status(200).send(data);
});

export default handler;
