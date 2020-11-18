const { Product } = require('../../../libs/models');

const del = async (productId) => {
  const res = Product.findByIdAndDelete(productId);
  console.log({ res })
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { msg: 'ok' },
    }),
  };
};

module.exports = del;
