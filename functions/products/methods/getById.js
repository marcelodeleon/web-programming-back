const { Product } = require('../../../libs/models');

const getById = async (id) => {
  const product = await Product.findById(id);
  if (!product) return { statusCode: 404 };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: product }),
  };
};

module.exports = getById;
