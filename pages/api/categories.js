import nc from "next-connect";
import { getCategories } from "lib/db";

const handler = nc({ attachParams: true });
handler.get(async (req, res) => {
  const data = await getCategories();
  return res.status(200).send(data);
});

export default handler;
