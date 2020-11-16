const { register } = require('./methods');
const { mongodb } = require('../../libs/connectors');
// const { db } = require('../../libs/middleware');

const mongodbUri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false; // eslint-disable-line no-param-reassign
  const { httpMethod: method } = event;

  await mongodb(mongodbUri);
  if (method === 'POST') {
    const userData = JSON.parse(event.body);
    return register(userData);
  }

  return {
    statusCode: 400,
  };
};

// exports.handler = usersHandler;
