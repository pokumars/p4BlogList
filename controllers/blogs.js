const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/info', (request, response) => {
  Blog.find({}).count((err, count) => {
    console.log('Number of blogs: ', count );
  
    response.send(`<p>BlogList has ${count} blogs saved. 
      <br> ${new Date()}</p>`);
  });
});
  
blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs);
    });
});
  
blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body);
  
  blog
    .save()
    .then(result => {
      response.status(201).json(result);
    });
});
  

module.exports =blogsRouter;