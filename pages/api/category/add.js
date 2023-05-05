import nc from "next-connect";
import fs from "fs";
import { addCategory } from "lib/db";

const handler = nc({ attachParams: true });

handler.post(async (req, res) => {
  const category = req.body;
  try {
    const data = await addCategory(category);

    return res.status(200).send("succuss");
  } catch (error) {
    return res.status(450).send(error.message);
  }
});

export default handler;
// import nc from "next-connect";
// import fs from "fs";

// const handler = nc({ attachParams: true });
// handler.post((req, res) => {
//   const { name } = req.body;
//   const data = fs.readFileSync("db/categories.json");
//   const json = JSON.parse(data);
//   json[name] = name;
//   fs.writeFileSync("db/categories.json", JSON.stringify(json));
//   return res.status(200).send(name);
// });

// export default handler;
