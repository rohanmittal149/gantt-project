import express from "express";
import Task from "../models/task";
const router = express.Router();

// get a list task from the database
router.get('/task',function(req,res,next){
    Task.find({}).then(function(tasks){
        res.send(tasks);
    }).catch(next);
});

//get task by id
router.get('/task/:id',function(req,res,next){
    Task.findById(req.params.id).then(function(task){
        res.send(task);
    }).catch(next);
});

// add a new task to database                  
router.post('/task',function(req,res,next){
    Task.create(req.body).then(function(task){
        res.send(task);
    }).catch(next);
});

//
router.put('/task/:id',function(req,res,next){
    Task.findByIdAndUpdate({_id: req.params.id},req.body, { new: true }).then(function(task){
        res.send(task);
    }).catch(next);
});

//
router.patch('/task/:id',function(req,res,next){
    Task.findById(req.params.id).then(function(task){
        res.send(task);
    }).catch(next);
});

//
router.delete('/task/:id',function(req,res,next){
    Task.findByIdAndDelete(req.params.id).then(function(task){
        res.send(task);
    }).catch(next);
});

module.exports = router;