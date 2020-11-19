const { register } = require('./methods');
const { db, authentication } = require('../../libs/middleware');

const usersHandler = async (event) => {
  const { httpMethod: method } = event;

  if (method === 'POST') {
    const userData = JSON.parse(event.body);
    return register(userData);
  }

  return {
    statusCode: 400,
  };
};

const options = {
  unauthenticatedRoutes: [{ method: 'POST', path: '/api/users' }],
};
exports.handler = db(authentication(options)(usersHandler));
