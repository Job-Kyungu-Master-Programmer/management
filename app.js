const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');
const userRouter = require('./controllers/users');
const pubRouter = require('./controllers/pubs');
const loginRouter = require('./controllers/login');
const middleware = require('./utils/middleware');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('./utils/logger');

mongoose.connect(config.MONGODB_URI).then(result => {
    logger.info('Connected to Database');
}).catch(err => {
    logger.error('Failed connection');
});

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use(express.static('build'));

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

app.use(middleware.requestLogger);
app.use('/api/users', userRouter);
app.use('/api/pubs', pubRouter);
app.use('/api/login', loginRouter)

// Redirect all other requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
// });

module.exports = app;
