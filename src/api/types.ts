export type TransportOptions = {
  auth?: boolean;
  customHeaders?: Record<string, string>;
};

export type TEndpoint = {
  url: string;
  options: TransportOptions;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
};

export type TEndpoints = Record<string, Record<string, TEndpoint>>;
