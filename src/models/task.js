import mongoose, { Schema, Model } from "mongoose";

var taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Number,
    required: true
  },
  isSubtask: {
    type: Boolean,
    required: true
  },
  startDate: {
    type: Date
  },
  duration: {
    type: Date
  },
  completionPercentage: {
    type: Number
  },
  order: {
    type: Number
  }
});

module.exports = mongoose.model("Task", taskSchema);