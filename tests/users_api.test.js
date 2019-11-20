const User = require('../models/user');
const mongoose = require('mongoose');
const app = require('../app');
const supertest = require('supertest');
const helper =require('./test_helper');

const api = supertest(app);



beforeEach(async () => {
  await User.deleteMany({});
  //create one test user
  const user = new User({ username: 'test1', name: 'Jimmy choo', password:'salakala' });

  await user.save();
});

describe('If there is already one user in db', () => {
  test('creation fails when username already exists with correct erroe code', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser= { username: 'test1', password:'salakala' };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('`username` to be unique');

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd.length).toBe(usersAtStart.length);
  });
});

describe('creating users', () => {
  test('adding a user when all criteria is met+ fresh username', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'pokumars',
      name: 'Oheneba Knobhead',
      password: 'secreto',
    };

    /*const newUser = {
      "username": "daenerys",
      "password": "daenerys",
    };*/

    /**{
      "username" : "mojo",
      "password": "chelsea2005",
      "name": "Jose Mourinho"
    } */

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1);

    const usernames = usersAtEnd.map(u => u.username);
    expect(usernames).toContain(newUser.username);


  });
});

afterAll(() => {
  mongoose.connection.close();
});