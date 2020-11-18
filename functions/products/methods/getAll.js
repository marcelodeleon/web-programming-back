const { Product } = require('../../../libs/models');

const getAll = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((await Product.find({})))
  };
};

module.exports = getAll;