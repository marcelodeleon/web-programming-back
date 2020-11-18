import { get } from '../utils/api.js';

export const addProduct = async (productData) => {
  const { error } = await post('/products', productData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};

export const getProduct = async () => {
  const { error } = await get('/products');

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};