import { get, post } from '../utils/api.js';

export const addProduct = async (productData) => {
  const { error } = await post('/products', productData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};

export const getProducts = async () => {
  const { data, error } = await get('/products');

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  return data;
};
