const request = require('supertest');
const app = require('../../src/app');

const { User } = require('../../src/app/models');
const truncate  = require('../../__tests__/utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await User.create("User", {
      name: 'Tamires',
      email: 'tamires@gmail.com',
      password: "123123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async() => {
    const user = await User.create({
      name: 'Tamires',
      email: 'tamires@gmail.com',
      password_hash: '123123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123122'
      });

    expect(response.status).toBe(401);
  });
}); 
