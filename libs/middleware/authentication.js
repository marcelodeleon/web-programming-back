const jwt = require('jsonwebtoken');

const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return null;
    }

    throw err;
  }
};

const bypassAuth = (unauthenticatedRoutes, event) => {
  const { httpMethod: currentMethod, path: currentPath } = event;

  return unauthenticatedRoutes.some(
    ({ method, path }) => currentMethod === method && currentPath === path,
  );
};

const authentication = (
  { unauthenticatedRoutes } = { unauthenticatedRoutes: [] },
) => (handler) => async (event, context) => {
  if (bypassAuth(unauthenticatedRoutes, event)) {
    return handler(event, context, null);
  }

  const { headers } = event;

  const { authorization } = headers;
  if (!authorization) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'You must be logged in.' }),
    };
  }

  const [scheme, token] = authorization.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: `Unsupported authentication scheme: "${scheme}". Supported schemes: "Bearer".`,
      }),
    };
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Invalid token.',
      }),
    };
  }

  const { sub: userId } = decoded;
  const user = await User.findById(userId);
  context.user = user;

  if (!user) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Invalid token.',
      }),
    };
  }

  return handler(event, context, user);
};

module.exports = authentication;
