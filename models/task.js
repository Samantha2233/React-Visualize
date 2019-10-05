const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    color: String,
    size: String,
    time: String,
    completed: Boolean
}, {
        timestamps: true
    });

module.exports = mongoose.model('Task', taskSchema);