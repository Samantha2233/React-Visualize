const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

//      P U B L I C   R O U T E S
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


//      P R O T E C T E D   R O U T E S




module.exports = router;


