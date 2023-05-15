import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });

handler.get(async (req, res) => {
  console.log("req.query");
  console.log(req.query);
  const { name } = req.query;
  //   return res.status(200).send({ id, name: "ntiera" });
  try {
    const data = await DB.getGaolByName(name);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(450).send(error.message);
  }
});

export default handler;
