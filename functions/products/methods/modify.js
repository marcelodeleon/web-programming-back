const { Product } = require('../../../libs/models');

const modify = async (id, productData) => {
  const updated = await Product.findByIdAndUpdate(id, productData);

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: updated._id }),
  };
};

module.exports = modify;
