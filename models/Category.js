import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
