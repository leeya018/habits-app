// import nc from "next-connect";
// import fs from "fs";

// const handler = nc({ attachParams: true });
// handler.post((req, res) => {
//   const { name } = req.body;
//   const data = fs.readFileSync("db/habits.json");
//   const json = JSON.parse(data);
//   json[name] = name;
//   fs.writeFileSync("db/categories.json", JSON.stringify(json));
//   return res.status(200).send(name);
// });

// export default handler;
