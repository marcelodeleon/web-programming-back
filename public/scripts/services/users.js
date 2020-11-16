import { navigate } from '../utils/navigation.js'
import { post } from '../utils/api.js';

export const register = async (userData) => {
  const { error } = await post('/users', userData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  navigate('/login');
};
