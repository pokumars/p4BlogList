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

describe('deleting of blogs', () => {
  test('successfully delete an item', async () => {

    const blogsAtStart = await helper.blogsInDb();
    const blogToDelete = blogsAtStart[0];
    

    await api.delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204);

    const blogsAtEnd= await helper.blogsInDb();

    //list should be shorter by one
    expect(blogsAtStart.length).toBe(blogsAtEnd.length + 1);

    const titles = blogsAtEnd.map(b => b.title);

    //that title should not exist in list
    expect(titles).not.toContain(blogToDelete.title);

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

  test('if likes value is missing give it a default of 0', async () => {
    const newBlog = {
      'title': 'How to grow',
      'author': 'John Oliver',
      'url': 'www.JohnOliver.com',
    };

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    //find the just added blog
    const newestBlog = blogsAtEnd.find(b => b.title === newBlog.title);
    expect(newestBlog.likes).toBe(0);
  });

  test('if title and url are missing status should be 400 Bad Request',async () => {
    const newBlog = {
      'author': 'Seth Godin',
      'likes': 4700
    };

    await api.post('/api/blogs')
      .send(newBlog)
      .expect(400);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length);

  });
});

describe('updating blogs', () => {
  test('update a blog', async () => {
    const blogsAtStart = await helper.blogsInDb();
    const blogToUpdate = blogsAtStart[0];

    const replacement = {
      'title': blogToUpdate.title,
      'author': blogToUpdate.author,
      'url': blogToUpdate.url,
      'likes': 6000
    };

    await api.put(`/api/blogs/${blogToUpdate.id}`)
      .send(replacement)
      .expect(200);

    const blogsAtEnd = await helper.blogsInDb();
    expect (blogsAtStart.length).toBe(blogsAtEnd.length);

    const updatedBlog= blogsAtEnd.find(b => b.id === blogToUpdate.id);
    expect(updatedBlog.likes).toBe(6000);
  });
});


afterAll(() => {
  mongoose.connection.close();
});

