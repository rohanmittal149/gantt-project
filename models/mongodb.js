import { connect } from "mongoose";

connect(
  "mongodb+srv://m001-student:Om9QeJ6bejw6H39y@sandbox.ny9uv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log("Failed to Establish Connection with MongoDB with Error: " + err);
    }
  }
);

//Connecting Node and MongoDB
import "./gantt.model.project";
import "./gantt.model.task";
import "./gantt.model.subtask";
export {};
