const { create } = require('./methods');
const { getAll } = require('./methods');

const { db, authentication } = require('../../libs/middleware');

const offerHandler = async (event) => {
  const { httpMethod: method } = event;

  if (method === 'POST') {
    const offerData = JSON.parse(event.body);
    console.log({ offerData });
    return create(offerData);
  }

  if (method === 'GET') {
    return getAll();
  }

  return {
    statusCode: 400,
  };
};

exports.handler = db(authentication()(offerHandler));
