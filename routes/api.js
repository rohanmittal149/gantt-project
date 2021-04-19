import express from "express";
import taskController from "../models/project";
const router = express.Router();

// get a list of students from the database
router.get('/project',function(req,res,next){
    Project.find({}).then(function(projects){
        res.send(projects);
    }).catch(next);
});

// add a new student to database
router.post('/projects',function(req,res,next){
    Project.create(req.body).then(function(project){
        res.send(project);
    }).catch(next);
});

module.exports = router;
