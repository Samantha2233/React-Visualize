var Task = require('../models/task');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    complete
}

async function index(req, res) {
    const tasks = await Task.find({});
    res.json(tasks);
}

async function show(req, res) {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
}

async function create(req, res) {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(201).json(task);
}

async function deleteOne(req, res) {
    const deletedTask = await Task.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTask);
}


async function update(req, res) {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
}

async function complete(req, res) {
    console.log(req.params.body);
    const completeTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(completeTask);
}

