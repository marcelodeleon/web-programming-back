const { User } = require('../../../libs/models');

const register = async (userData) => {
  const newUser = new User(userData);
  newUser.save();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 'ok' }),
  };
};

module.exports = register;
