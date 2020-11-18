const { Offer } = require('../../../libs/models');

const create = async (offerData) => {
  const newOffer = new Offer(offerData);
  newOffer.save();

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 'ok' }),
  };
};

module.exports = create;

