import express from "express";
import Project from "../models/project";
const router = express.Router();

// get a list of projects from the database
router.get('/project',function(req,res,next){
    Project.find({}).then(function(projects){
        res.send(projects);
    }).catch(next);
});

//get project by id
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

//
router.put('/project/:id',function(req,res,next){
    Project.findByIdAndUpdate({_id: req.params.id},req.body, { new: true }).then(function(project){
        res.send(project);
    }).catch(next);
});

//
router.patch('/project/:id',function(req,res,next){
    Project.findById(req.params.id).then(function(project){
        res.send(project);
    }).catch(next);
});

//
router.delete('/project/:id',function(req,res,next){
    Project.findByIdAndDelete(req.params.id).then(function(project){
        res.send(project);
    }).catch(next);
});

module.exports = router;
