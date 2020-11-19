const { User } = require('../../../libs/models');

const getById = async (id) => {
  const user = await User.findById(id);
  if (!user) return { statusCode: 404 };

  const clientsafeUser = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { user: clientsafeUser } }),
  };
};

module.exports = getById;
