import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
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
  mainGoal: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  amountCompletePerDay: {
    type: Object,
    required: true,
    default: {},
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Habit || mongoose.model("Habit", HabitSchema);
