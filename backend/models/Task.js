const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        default:"Untitled",
    },
    description: {
        type: String,
        required: true,
    },
    taskStatus: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', taskSchema);