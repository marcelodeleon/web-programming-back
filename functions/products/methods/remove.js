const { Product } = require('../../../libs/models');

const remove = async (productId) => {
  await Product.findByIdAndDelete(productId);

  return {
    statusCode: 204,
  };
};

module.exports = remove;
