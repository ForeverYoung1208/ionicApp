import { CONTENT_TYPE_APPLICATION_JSON, BASE_URL } from "../constants";

interface ITransport {
  get:<T> (endpoint: string) => Promise<T>;
  post: <T> (endpoint: string, data: object) => Promise<T>;
  put: <T> (endpoint: string, data: object) => Promise<T>;
  patch: <T> (endpoint: string, data: object) => Promise<T>;
  delete: <T> (endpoint: string) => Promise<T>;
}

class FetchTransport implements ITransport {
  private commonHeaders = {
    'Content-Type': CONTENT_TYPE_APPLICATION_JSON,
  }
  
  constructor(
    private baseUrl: string
  ) {}
  
  async get<T>(endpoint: string) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: this.commonHeaders,
    }).then(res => res.json() as Promise<T>);
  }
  
  async post<T>(endpoint: string, data: object) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: this.commonHeaders,
      body: JSON.stringify(data),
    }).then(res => res.json() as Promise<T>);
  }
  
  async put<T>(endpoint: string, data: object) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: this.commonHeaders,
      body: JSON.stringify(data),
    }).then(res => res.json() as Promise<T>);
  } 
  
  async patch<T>(endpoint: string, data: object) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'PATCH',
      headers: this.commonHeaders,
      body: JSON.stringify(data),
    }).then(res => res.json() as Promise<T>);
  }
  
  async delete<T>(endpoint: string) {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'DELETE',
      headers: this.commonHeaders,
    }).then(res => res.json() as Promise<T>);
  }
}

export const transport = new FetchTransport(BASE_URL);
