import chai from 'chai';
import request from 'supertest';
import app from '../src/app.js'; 

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const newUser = { username: 'testuser', password: 'password' };
    const res = await request(app)
      .post('/auth/register')
      .send(newUser);

    chai.expect(res.status).to.equal(200); // Cambiar según el comportamiento esperado
  });

  it('should login a user', async () => {
    const user = { username: 'testuser', password: 'password' };
    const res = await request(app)
      .post('/auth/login')
      .send(user);

    chai.expect(res.status).to.equal(200); // Cambiar según el comportamiento esperado
  });
});
