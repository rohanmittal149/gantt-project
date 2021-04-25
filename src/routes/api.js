import express from "express";
import Project from "../models/project";
const router = express.Router();

// get a list of projects from the database
router.get('/project',function(req,res,next){
    Project.find({}).then(function(projects){
        res.send(projects);
    }).catch(next);
});

router.get('/project/:id',function(req,res,next){
    Project.findById(req.params.id).then(function(project){
        res.send(project);
    }).catch(next);
});
// add a new project to database
router.post('/project',function(req,res,next){
    Project.create(req.body).then(function(project){
        res.send(project);
    }).catch(next);
});

module.exports = router;
