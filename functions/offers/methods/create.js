const { Offer } = require('../../../libs/models');

const create = async (offerData) => {
  const newOffer = new Offer(offerData);
  newOffer.save();

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOffer._id),
  };
};

module.exports = create;

