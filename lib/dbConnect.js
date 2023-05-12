require("dotenv").config();

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;
const MONGODB_URI_PORDUCTION = process.env.MONGO_URI_PORDUCTION;
const NODE = process.env.NODE;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const mongoUrl = NODE === "dev" ? MONGODB_URI : MONGODB_URI_PORDUCTION;
  console.log({ mongoUrl });
  return mongoose.connect(mongoUrl);
}

export default dbConnect;
