const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body;

    const saltRounds = 10;

    if (body.password.length < 3) {
      console.error('password must be longer than 3 characters');
      return response.status(400).send({ error: 'password must be longer than 3 characters' });
    }

    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username : body.username,
      passwordHash,
      name:body.name
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('blogs', { title:1, author:1, likes:1, url:1 });

  response.json(users.map(u => u.toJSON()));
});

usersRouter.get('/:id', async (request, response, next) => {
  try{
    const user = await User
      .findById(request.params.id);
      
    if(user) {
      response.json(user.toJSON());
    }
    else{
      response.status(404).end();
    }

  }
  catch(exception){
    next(exception);
  }
});

module.exports = usersRouter;