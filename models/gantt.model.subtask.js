import { Schema, model } from 'mongoose';

var subTaskSchema = new Schema({
    name: {
    type: String,
    required: true
    },
    owner: {
    type: Int32Array,
    required: true
    },
    isSubtask: {
    type: Boolean
    },
    startDate: {
    type: Date
    },
    duration: {
    type: Date
    },
    completionPercentage: {
    type: Int32Array
    },
    order: {
    type: Int32Array
    }
    });
        
module.exports = mongoose.model('SubTask', subTaskSchema);