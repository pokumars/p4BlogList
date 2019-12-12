const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

blogsRouter.get('/info', (request, response) => {
  Blog.find({}).count((err, count) => {
    console.log('Number of blogs: ', count );
  
    response.send(`<p>BlogList has ${count} blogs saved. 
      <br> ${new Date()}</p>`);
  });
});
  
blogsRouter.get('/', async (request, response, next) => {
  
  try{
    const blogs = await Blog
      .find({})
      .populate('user', { username:1, name:1 });

    response.json(blogs);
  }
  catch(exception){
    next(exception);
  }
});

blogsRouter.get('/:id', async (request, response, next) => {
  try{

    const blog = await Blog
      .findById(request.params.id)
      .populate('user', { username:1, name:1 });
      
    if(blog) {
      response.json(blog.toJSON());
    }
    else{
      response.status(404).end();
    }

  }
  catch(exception){
    next(exception);
  }
});

blogsRouter.delete('/:id', async (request, response, next) => {
  
  try{
    const token = request.token;
    const blogId = request.params.id;

    
    const decodedToken = jwt.verify(token, process.env.SECRET);

    //find the user making the post from db
    const user = await User.findById(decodedToken.id);

    const blogToBeDeleted = await Blog.findById(request.params.id);
    logger.info('blogToBeDeleted ----->', blogToBeDeleted);
    
    if(blogToBeDeleted.user.toString() === user.id.toString()){

      await Blog.findByIdAndRemove(blogId);

      //remove blog form user's list of blogs
      user.blogs = user.blogs.filter((b) => b.toString() !== blogToBeDeleted._id.toString());
      console.log('updated user, blogs should be empty',user);
      await user.save();

      // and then a user.overwrite
      //await user.overwrite()

      console.log('successful delete');
      response.status(204).end();
    }
  }
  catch(exception){
    next(exception);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body;
  //const token =getTokenFrom(request);
  const token =request.token;
  
  try{
    //jwt.verify Returns the payload decoded if the signature is valid. If not, it will throw the error
    //The object decoded from the token contains the username and id fields, which tells the server who made the request
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if(!token || !decodedToken.id){
      return response.status(401).json({ error: 'token missing or invalid' });
    }

    const user = await User.findById(decodedToken.id);

    const blog = new Blog({
      'title': body.title,
      'author' : body.author,
      'url': body.url,
      'likes': body.likes || 0,
      'user': user._id
    });

    const savedBlog  =await  blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    response.status(201).json(savedBlog.toJSON());
  }
  catch(exception){
    next(exception);
  }
});

blogsRouter.put('/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    const replacement = request.body;

    const updatedBlog = await Blog.findByIdAndUpdate(id, replacement, { new: true });

    response.json(updatedBlog.toJSON());

  } catch(exception) {
    next(exception);
  }

});
  

module.exports =blogsRouter;