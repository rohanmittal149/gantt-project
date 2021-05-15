//Import the necessary packages
import express from "express";
import cors from "cors";
import mongoose, { Schema, Model } from "mongoose";

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb+srv://m001-student:MfxDuaQS6a5yIia3@sandbox.ny9uv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log("Failed to Establish Connection with MongoDB with Error: " + err);
    }
  }
);

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/project'));
app.use('/api',require('./routes/task'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.PORT || 8080, function(res){
  console.log(res);
    console.log('Ready to Go!');
});

//Set the Controller path which will be responding the user actions

//app.route("/project").get(projectController).post(postProj);
// app.route("/task", taskController);
//app.route('/subTask', subTaskController);


