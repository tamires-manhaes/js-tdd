const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {

  beforeEach(async () => {
    await truncate();
  });
  
  it('should encrypt user password', async() => {
    const user = await User.create({ 
      name: 'Tamires', 
      email: 'tamires@gmail.com', 
      password: 'tisgr8' 
    });

    const compareHash = await bcrypt.compare('tisgr8', user.password_hash);

    expect(compareHash).toBe(true);
  })
})