const logger = require('../utils/logger');

//we shall make our own middleware to log stuff
const requestLogger = (request, response, next) => {
  /*if(request.path !== '/api/login' ) {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.path);
    logger.info('Body:  ', request.body);
    logger.info('---');
  }*/

  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  request.path !== '/api/login' && logger.info('Body:  ', request.body);
  logger.info('---');
  

  next();
};

const getTokenFrom= (request, response, next) => {
  const authorization = request.get('authorization');

  if(authorization && authorization.toLowerCase().startsWith('bearer ')){    
    request.token = authorization.substring(7);
    //console.log('token field --->',request.token);
  }
  
  next();
};
  
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint. Try /api/blogs' });
};

//errorHandler is used only when next is called with a parameter of error
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);
  
  if(error.name==='CastError' && error.kind === 'ObjectId'){
    return response.status(400).send({ error: 'malformatted id' });
  }
  else if(error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message });
  }
  else if( error.name === 'JsonWebTokenError'){
    return response.status(401).json({
      error: 'invalid token'
    });
  }
  
  next(error);
};
  
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  getTokenFrom
};