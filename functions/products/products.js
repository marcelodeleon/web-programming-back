const { create, getAll, remove } = require('./methods');

const { db } = require('../../libs/middleware');

const productsHandler = async (event) => {
  const { httpMethod: method } = event;

  if (method === 'POST') {
    const productData = JSON.parse(event.body);
    return create(productData);
  }

  if (method === 'GET') {
    return getAll();
  }

  if (method === 'DELETE') {
    const { productId } = event.queryStringParameters;
    return remove(productId);
  }

  return {
    statusCode: 400,
  };
};

exports.handler = db(productsHandler);
