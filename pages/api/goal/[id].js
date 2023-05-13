import nc from "next-connect";
import * as DB from "lib/db";

const handler = nc({ attachParams: true });

handler.get(async (req, res) => {
  console.log("req.query");
  console.log(req.query);
  const { id } = req.query;
  //   return res.status(200).send({ id, name: "ntiera" });
  try {
    const data = await DB.getGaolById(id);

    return res.status(200).send("succuss");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});

export default handler;
