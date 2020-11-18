const { create, getAll, del} = require('./methods');

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
    const productId = JSON.parse()
    return del(productId)
  }

  return {
    statusCode: 400,
  };
};

exports.handler = db(productsHandler);
