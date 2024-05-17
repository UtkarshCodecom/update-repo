const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0 // You can define your own status codes, e.g., 0 for pending, 1 for completed, etc.
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    deadline: {
        type: Object,
        required: true
    }
}, { timestamps: true });

// Define the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
