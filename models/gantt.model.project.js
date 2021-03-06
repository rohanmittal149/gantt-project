import mongoose, { Schema, Model } from "mongoose";

//Attributes of the Project object
var projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  logo: {
    type: String
  },
  projectManager: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Project", projectSchema);
