const Blog = require('../models/blog');
const User = require('../models/user');

const initialBlogs = [
  {
    'title': 'Multithreading Javascript',
    'author': 'Max Peng',
    'url': 'https://medium.com/techtrument/multithreading-javascript-46156179cf9a',
    'likes': 1800,
  },
  {
    'title': '3 Ways to clone objects in JavaScript',
    'author': 'Farzad YZ',
    'url': 'https://medium.com/better-programming/3-ways-to-clone-objects-in-javascript-f752d148054d',
    'likes': 1600,
  },
  {
    'title': 'A Simple Guide to ES6 Iterators in JavaScript with Examples',
    'author': 'Brandon Morelli- A Guest Post By: Arfat Salman',
    'url': 'https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e',
    'likes': 12600,
  },
  {
    'title': 'A simple intro to Javascript imports and exports',
    'author': 'Jason Arnold',
    'url': 'https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac',
    'likes': 4700,
  }
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});

  return blogs.map(blog => blog.toJSON());
};

const usersInDb = async() => {
  const users = await User.find({});

  return users.map(u => u.toJSON());
};


module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb
};