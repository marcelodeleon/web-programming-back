const { modify, create, getAll, remove, getById } = require('./methods');

const { db, authentication } = require('../../libs/middleware');

const productsHandler = async (event) => {
  const { httpMethod: method } = event;

  if (method === 'POST') {
    const productData = JSON.parse(event.body);
    return create(productData);
  }

  if (method === 'GET') {
    const { productId } = event.queryStringParameters;
    if (productId) return getById(productId);
    return getAll();
  }

  if (method === 'DELETE') {
    const { productId } = event.queryStringParameters;
    return remove(productId);
  }

  if (method === 'PUT') {
    const { id, ...rest } = JSON.parse(event.body);
    return modify(id, rest);
  }

  return {
    statusCode: 400,
  };
};

exports.handler = db(authentication()(productsHandler));
