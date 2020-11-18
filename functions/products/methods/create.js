const { Product } = require('../../../libs/models');

const create = async (productData) => {
  const newProduct = new Product(productData);
  newProduct.save();

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 'ok' }),
  };
};

module.exports = create;

