const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/info', (request, response) => {
  Blog.find({}).count((err, count) => {
    console.log('Number of blogs: ', count );
  
    response.send(`<p>BlogList has ${count} blogs saved. 
      <br> ${new Date()}</p>`);
  });
});
  
blogsRouter.get('/', async (request, response, next) => {
  
  try{
    const blogs = await Blog.find({});

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
  
blogsRouter.post('/', async (request, response, next) => {
  
  try{
    const blog = new Blog(
      {
        'title': request.body.title,
        'author' : request.body.author,
        'url': request.body.url,
        'likes': request.body.likes || 0
      }
    );

    const result  =await  blog.save();
    response.status(201).json(result.toJSON());

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