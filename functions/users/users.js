const { register } = require('./methods');
const { authentication } = require('../../libs/middleware');
const { db } = require('../../libs/middleware');

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
  unauthenticatedRoutes: [{ method: 'GET', path: '/api/users' }],
};
exports.handler = db(authentication(options)(usersHandler));
