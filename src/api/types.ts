export type TransportOptions = {
  auth?: boolean;
  customHeaders?: Record<string, string>;
};

export type TEndpoint = {
  url: (params?: { [key: string]: string }) => string;
  options: TransportOptions;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
};

export type TEndpoints = Record<string, Record<string, TEndpoint>>;

export interface ITransport {
  get: <T>(endpoint: string, options: TransportOptions) => Promise<T>;
  post: <T>(endpoint: string, data: object | null, options: TransportOptions) => Promise<T>;
  put: <T>(endpoint: string, data: object, options: TransportOptions) => Promise<T>;
  patch: <T>(endpoint: string, data: object, options: TransportOptions) => Promise<T>;
  delete: <T>(endpoint: string, options: TransportOptions) => Promise<T>;
  useEndpoint: <T>(endpoint: TEndpoint, data: object | null, params?: Record<string, string>) => Promise<T>;
}