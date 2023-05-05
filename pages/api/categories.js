import nc from "next-connect";
import fs from "fs";

const handler = nc({ attachParams: true });
handler.get((req, res) => {
  const data = fs.readFileSync("db/categories.json");
  const json = JSON.parse(data);

  return res.status(200).send(Object.keys(json));
});

export default handler;
