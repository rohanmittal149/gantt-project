//Import the necessary packages
import express from "express";
import cors from "cors";
// import path from "path";
// import exphb from 'express-handlebars';
import projectController, { postProj } from "./controllers/projectController";
// import taskController from "./controllers/taskController";
//import subTaskController from './controllers/subTaskController';

const app = express();

app.use(express.json());
app.use(cors());

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Set the Controller path which will be responding the user actions
app.route("/project").get(projectController).post(postProj);
// app.route("/task", taskController);
//app.route('/subTask', subTaskController);
