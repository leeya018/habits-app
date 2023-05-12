import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Goal || mongoose.model("Goal", GoalSchema);
