import { Schema, model } from "mongoose";

//Attributes of the Project object
var projectSchema = new Schema({
  name: {
    type: String,
    required: "This field is required!"
  },
  startDate: {
    type: Date,
    required: "This field is required!"
  },
  logo: {
    type: String
  },
  projectManager: {
    type: String
  },
  description: {
    type: String
  }
});
model("Project", projectSchema);

var taskSchema = new Schema({
  name: {
    type: String,
    required: "This field is required!"
  },
  owner: {
    type: Int32Array,
    required: "This field is required!"
  },
  isSubtask: {
    type: Boolean
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

model("Task", taskSchema);

var subTaskSchema = new Schema({
  name: {
    type: String,
    required: "This field is required!"
  },
  owner: {
    type: Int32Array,
    required: "This field is required!"
  },
  isSubtask: {
    type: Boolean
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

model("SubTask", subTaskSchema);
