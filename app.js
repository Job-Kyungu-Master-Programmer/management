const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const userRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const path = require('path')
const mongoose = require('mongoose')
const logger = require('./utils/logger')


mongoose.connect(config.MONGODB_URI).then(result => {
    logger.info('Connected to Database')
}).catch(err => {
    logger.error('Failed connection')
})


app.use(cors());
app.use(express.static('build'));
// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Pour afficher les photos
app.use(middleware.requestLogger);
app.use('/api/users', userRouter);


module.exports = app