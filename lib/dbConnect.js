require("dotenv").config();

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;
const MONGODB_URI_PORDUCTION = process.env.MONGO_URI_PORDUCTION;
const STATE = process.env.STATE;
const mongoUrl = STATE === "dev" ? MONGODB_URI : MONGODB_URI_PORDUCTION;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  console.log({ mongoUrl, STATE });
  return mongoose.connect(mongoUrl);
}

export default dbConnect;
