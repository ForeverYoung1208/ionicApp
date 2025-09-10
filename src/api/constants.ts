import { TEndpoints } from './types';

export const CONTENT_TYPE_APPLICATION_JSON = 'application/json';
export const BASE_URL = import.meta.env.VITE_API_SERVER_URL;

export const ENDPOINTS: TEndpoints = {
  auth: {
    signin: { url: () => 'auth/signin', method: 'POST', options: { auth: false } },
    refresh: { url: () => 'auth/refresh', method: 'POST', options: { auth: false } },
  },
  users: {
    getAll: { url: () => 'users', method: 'GET', options: { auth: true } },
    getById: { url: (params) => `users/${params?.id}`, method: 'GET', options: { auth: true } },
  },
};
