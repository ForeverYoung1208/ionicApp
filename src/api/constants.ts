export const CONTENT_TYPE_APPLICATION_JSON = 'application/json';
export const BASE_URL = import.meta.env.VITE_API_SERVER_URL;

export const ENDPOINTS = {
  auth: {
    signin: 'auth/signin',
  },
  users: {
    getAll: 'users',
  },
};
  