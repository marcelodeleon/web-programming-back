const { create } = require('./methods');
const { getAll } = require('./methods');

const { db } = require('../../libs/middleware');

const offerHandler = async (event) => {
  
  const { httpMethod: method } = event;
 
  if (method === 'POST') {
    const offerData = JSON.parse(event.body);
    return create(offerData);
  }

   if (method === 'GET') {
    return getAll();
  } 

  return {
    statusCode: 400,
  };
};

exports.handler = db(offerHandler);