import { BASE_URL } from '../constants';
import { FetchTransport } from './fetch-transport';

export const transport = new FetchTransport(BASE_URL);
