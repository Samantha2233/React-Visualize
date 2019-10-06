var Task = require('../models/task');

module.exports = {
    create,
    index,
}

async function create(req, res) {
    try {
        await Task.create(req.body);
        // Use index action to return the list
        index(req, res);
    } catch (err) {
        res.json({ err });
    }
}

async function index(req, res) {
    const tasks = await Task.find({});
    res.json(tasks);
}

