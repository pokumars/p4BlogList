const mongoose = require('mongoose');
const Blog = require('../models/blog');
const helper = require('./test_helper');
//This object is assigned to the api variable and tests can use it
// for making HTTP requests to the backend.
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

beforeEach (async () => {
  await Blog.deleteMany({});

  //We dont use for each to save the notes to db for the following reason
  //the await commands defined inside of the forEach loop are not in the beforeEach
  // function, but in separate functions that beforeEach will not wait for.

  /**The noteObjects variable is assigned to an array of Mongoose objects that
   *  are created with the Note constructor for each of the notes in the helper.
   * initialNotes array. The next line of code creates a new array that consists
   *  of promises, that are created by calling the save method of each item in 
   * the noteObjects array. In other words, it is an array of promises for saving
   *  each of the items to the database. */

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog));

  const promiseArray = blogObjects.map(blog => blog.save());

  //Promise.all() method returns a single Promise that resolves 
  //when all of the promises passed as an iterable have resolved
  await Promise.all(promiseArray);

  console.log('done');
});

describe('There are blogs in db already', () => {
  test ('blogs are returned as json', async () => {

    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  
  test ('right number of blogs are returned', async () => {
    const response = await api.get('/api/blogs');
  
    expect(response.body.length).toBe(helper.initialBlogs.length);
  });
 
  
  test('id is defined', async () => {
    const response = await api.get('/api/blogs');
    response.body.map(b => {
      //b._id or b.xd or b.xy would fail so you know b.id actually is defined
      expect(b.id).toBeDefined();
    });
  });
});

describe('addition of a new note', () => {
  test('notes increase by one and contains the correct note', async () => {
    const newBlog = {
      'title': 'How to Zlatan',
      'author': 'Zlatan something',
      'url': 'www.google.com',
      'likes': 200,
    };

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1);

    const titles = blogsAtEnd.map(b => b.title);
    expect(titles).toContain('How to Zlatan');
  });
});


afterAll(() => {
  mongoose.connection.close();
});

