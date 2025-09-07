import { BASE_URL } from '../constants';
import { TEndpoint, TransportOptions } from '../types';
import { BaseTransport } from './base-transoport';

interface ITransport {
  get: <T>(endpoint: string, options: TransportOptions) => Promise<T>;
  post: <T>(endpoint: string, data: object | null, options: TransportOptions) => Promise<T>;
  put: <T>(endpoint: string, data: object, options: TransportOptions) => Promise<T>;
  patch: <T>(endpoint: string, data: object, options: TransportOptions) => Promise<T>;
  delete: <T>(endpoint: string, options: TransportOptions) => Promise<T>;
  useEndpoint: <T>(endpoint: TEndpoint, data: object | null) => Promise<T>;
}

class FetchTransport extends BaseTransport implements ITransport {
  constructor(private baseUrl: string) {
    super();
  }

  async get<T>(endpoint: string, options?: TransportOptions) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: this.composeHeaders(options),
    }).then((res) => res.json() as Promise<T>);
  }

  async post<T>(endpoint: string, data: object | null, options?: TransportOptions) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: this.composeHeaders(options),
      body: data ? JSON.stringify(data) : null,
    }).then((res) => res.json() as Promise<T>);
  }

  async put<T>(endpoint: string, data: object, options?: TransportOptions) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: this.composeHeaders(options),
      body: JSON.stringify(data),
    }).then((res) => res.json() as Promise<T>);
  }

  async patch<T>(endpoint: string, data: object, options?: TransportOptions) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'PATCH',
      headers: this.composeHeaders(options),
      body: JSON.stringify(data),
    }).then((res) => res.json() as Promise<T>);
  }

  async delete<T>(endpoint: string, options?: TransportOptions) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'DELETE',
      headers: this.composeHeaders(options),
    }).then((res) => res.json() as Promise<T>);
  }
}

export const transport = new FetchTransport(BASE_URL);
