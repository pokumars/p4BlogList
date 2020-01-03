const config =require('./utils/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginrouter = require('./controllers/login');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const app = express();

const url = config.MONGODB_URI;
logger.info('connecting to', url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

app.use(cors());

//serves static pages from build directory when end point is / or /index.html
app.use(express.static('build'));
app.use(bodyParser.json());
app.use(middleware.getTokenFrom);

app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginrouter);

if (process.env.NODE_ENV === 'test') {
  const testingRouter= require('./controllers/testing');
  app.use('/api/testing',testingRouter);
}

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;