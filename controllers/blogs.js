const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

    const blog = await Blog.findById(request.params.id);
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
    
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  }
  catch(exception){
    next(exception);
  }
});

const getTokenFrom= (request) => {
  const authorization = request.get('authorization');

  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body;
  const token =getTokenFrom(request);

  
  try{
    //jwt.verify Returns the payload decoded if the signature is valid. If not, it will throw the error
    //The object decoded from the token contains the username and id fields, which tells the server who made the request
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if(!token || !decodedToken.id){
      return response.status(401).json({ error: 'token missing or invalid' });
    }

    console.log('decodedToken.id ----> ', decodedToken.id);
    console.log(body.user);
    const user = await User.findById(decodedToken.id);

    console.log(user);

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