import { Router } from 'express';
import { model } from 'mongoose';
//Creating a Router
var router = Router();

exports.getTasks = (req, res) => {
    Task.find({ userId: req.user._id })
        .then(task => res.json(task))
    };