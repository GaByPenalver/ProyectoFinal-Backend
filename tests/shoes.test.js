import chai from 'chai';
import request from 'supertest';
import app from '../src/app.js'; 

describe('Shoes Routes', () => {
  it('should get all shoes', async () => {
    const res = await request(app)
      .get('/shoes')
      .send();

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.an('array');
    chai.expect(res.body).to.have.length.greaterThan(0); 
  });
});
