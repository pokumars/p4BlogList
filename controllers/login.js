const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt =require('jsonwebtoken');

loginRouter.post('/', async (request, response) => {
  const body = request.body;
  console.log('login endpoint reached ------>login endpoint reached');


  const user =await User.findOne({ username: body.username });
  console.log('the user ------>', user);
  console.log('hash and password', body.password, user.passwordHash);

  const passwordCorrect = user === null
    ? false
    //bcrypt.compare method is used to check if the password is correct
    :await bcrypt.compare(body.password, user.passwordHash);
    console.log('passwordCorrect', passwordCorrect);


  if(!(user && passwordCorrect)){
    return response.status(401).json({
      error: 'invalid username or password'
    });
  }


  const userForToken = {
    username: user.username,
    id: user._id
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;