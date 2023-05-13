import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  traces: {
    type: [Object],
    required: false,
    default: [],
  },
});

module.exports = mongoose.models.Habit || mongoose.model("Habit", HabitSchema);
