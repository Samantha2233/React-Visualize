const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');

router.get('/', tasksCtrl.index);
router.post('/', tasksCtrl.create);