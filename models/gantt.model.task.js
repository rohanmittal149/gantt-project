import { Schema, model } from "mongoose";

var taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Int32Array,
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
    type: Int32Array
  },
  order: {
    type: Int32Array
  }
});

module.exports = mongoose.model("Task", taskSchema);
