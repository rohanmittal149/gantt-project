//Import the necessary packages
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
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

export const CONNECTION_URL = "mongodb+srv://admin:admin@gantt.y76jg.mongodb.net/admin?retryWrites=true&w=majority";
export const DATABASE_NAME = "gantt";

async function main() {
  try {
    const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    //Set the Controller path which will be responding the user actions
    app
      .route("/project")
      .get(projectController)
      .post((...arg) => postProj(arg, client));
    // app.route("/task", taskController);
    //app.route('/subTask', subTaskController);
  } catch {
    console.log("eror");
  }
}

main();
