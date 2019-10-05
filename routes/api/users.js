const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');

//      P U B L I C   R O U T E S
router.post('./singup', users.signup);



//      R O T E C T E D   R O U T E S

