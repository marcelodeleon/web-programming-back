const { Offer } = require('../../../libs/models');

const getAll = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: await Offer.find({}),
    }),
  };
};

module.exports = getAll;
