import { post, get } from '../utils/api.js';

export const addOffer = async (offerData) => {
  const { error } = await post('/offers', offerData);

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }
};

 export const getOffers = async () => {
  const { data, error } = await get('/offers');

  if (error) {
    throw new Error('Oops! Something went wrong...');
  }

  return data;
}; 