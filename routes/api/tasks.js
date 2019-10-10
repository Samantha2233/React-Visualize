const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');

router.get('/', tasksCtrl.index);
router.get('/:id', tasksCtrl.show);
router.post('/', tasksCtrl.create);
router.delete('/:id', tasksCtrl.delete);
router.put('/:id', tasksCtrl.update);

module.exports = router;