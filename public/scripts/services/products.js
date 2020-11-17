import { post } from '../utils/api.js';

export const addProduct = async (productData) => {
  const { error } = await post('/products', productData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};