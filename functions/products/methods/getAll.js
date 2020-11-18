const { Product } = require('../../../libs/models');

const getAll = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: await Product.find({}),
    }),
  };
};

module.exports = getAll;
