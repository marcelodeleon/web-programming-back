import { getSessionToken } from './session.js';

const baseUrl = '/api';

const fetch = async (url, method, data) => {
  const headers = new Headers();

  const token = getSessionToken();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  let body;
  if (data) {
    headers.append('Content-Type', 'application/json');
    body = JSON.stringify(data);
  }

  const response = await window.fetch(`${baseUrl}${url}`, {
    method,
    headers,
    body,
  });
  if (!response.ok) {
    return { error: { status: response.status } };
  }

  if (response.status !== 204) return { data: await response.json() };
  return response.status;
};

export const get = (url) => fetch(url, 'GET');

export const post = (url, data) => fetch(url, 'POST', data);

export const del = (url) => fetch(url, 'DELETE');
