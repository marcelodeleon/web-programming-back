import { get, post, del, put } from '../utils/api.js';

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

export const editProduct = async (productData) => {
  const { error } = await put('/products', productData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};

export const getProduct = async (id) => {
  const { data, error } = await get(`/products?productId=${id}`);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  return data;
};

export const removeProduct = async (id) => del(`/products?productId=${id}`);
