const { register, getById } = require('./methods');
const { db, authentication } = require('../../libs/middleware');

const usersHandler = async (event, context) => {
  const { httpMethod: method } = event;

  if (method === 'GET') {
    const { user } = context;
    const currentUserId = user._id;
    return getById(currentUserId);
  }

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
