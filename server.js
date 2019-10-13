//     I M P O R T S
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const tasksCtrl = require('./controllers/tasksCtr');
const app = express();

//     D A T A B A S E
require('dotenv').config();
require('./config/database');


//     C O R S
// const corsOptions = {
//     origin: process.env.CORS_WHITELIST
// }

//     M I D D L E W A R E
// keep cors on top!
// app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



//    A P I   R O U T E S  
// Keep above catch all!
app.use('/api/tasks', require('./routes/api/tasks'));
app.use(require('./config/auth'));
app.use('/api/users', require('./routes/api/users'));


//    C A T C H   A L L 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//    S T A R   S E R V E R
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Express app running on PORT ${PORT}`)
});