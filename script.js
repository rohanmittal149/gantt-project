import './models/mongodb';
 
//Import the necessary packages
import express from 'express';
var app = express();
import path from 'path';
//import exphb from 'express-handlebars';
import { bodyParser } from 'body-parser';
 
//import projectController from './controllers/projectController';
import taskController from './controllers/taskController';
//import subTaskController from './controllers/subTaskController';
 
app.use(bodyParser({
    extended: true
}));
app.use(cors());

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
 
//Set the Controller path which will be responding the user actions
//app.route('/project', projectController);
app.route('/task', taskController);
//app.route('/subTask', subTaskController);