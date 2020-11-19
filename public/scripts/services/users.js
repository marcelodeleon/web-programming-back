import { navigate } from '../utils/navigation.js';
import { get, post } from '../utils/api.js';

export const register = async (userData) => {
  const { error } = await post('/users', userData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  navigate('/login');
};

export const getCurrentUser = async () => {
  const { data: user, error } = await get('/users');

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  return user;
};
