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
app.use(bodyParser.json());

app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginrouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;