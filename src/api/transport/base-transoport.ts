import { CONTENT_TYPE_APPLICATION_JSON, ENDPOINTS } from '../constants';
import { ResponseTokenDto } from '../dto/auth/response-token.dto';
import { TEndpoint } from '../types';
import { TransportOptions } from '../types';

export abstract class BaseTransport {
  abstract get<T>(endpoint: string, options: TransportOptions): Promise<T>;
  abstract post<T>(endpoint: string, data: object | null, options: TransportOptions): Promise<T>;
  abstract put<T>(endpoint: string, data: object, options: TransportOptions): Promise<T>;
  abstract patch<T>(endpoint: string, data: object, options: TransportOptions): Promise<T>;
  abstract delete<T>(endpoint: string, options: TransportOptions): Promise<T>;
  
  public async useEndpoint(endpoint: TEndpoint, data: object | null) {
    switch (endpoint.method) {
      case 'GET': return this.get(endpoint.url, endpoint.options);
      case 'POST': return this.post(endpoint.url, data, endpoint.options);
      case 'PUT': {
        if (!data) {
          console.error('Data is required for PUT request, default to {}');
          data = {};
        }
        return this.put(endpoint.url, data, endpoint.options);
      }
      case 'PATCH': {
        if (!data) {
          console.error('Data is required for PATCH request, default to {}');
          data = {};
        }
        return this.patch(endpoint.url, data, endpoint.options);
      }
      case 'DELETE': return this.delete(endpoint.url, endpoint.options);
    }
  }

  protected getAuthHeaders(): Record<'Authorization', string> {
    const tokens = JSON.parse(localStorage.getItem('auth') || '{}') as ResponseTokenDto;
    return {
      Authorization: `Bearer ${tokens.accessToken}`,
    };
  }

  protected getCommonHeaders(): Record<string, string> {
    return {
      'Content-Type': CONTENT_TYPE_APPLICATION_JSON,
    };
  }

  protected composeHeaders(options?: TransportOptions): Record<string, string> {
    return options?.auth
      ? { ...this.getCommonHeaders(), ...this.getAuthHeaders(), ...options.customHeaders }
      : { ...this.getCommonHeaders(), ...options?.customHeaders };
  }

  protected async refreshTokens(): Promise<ResponseTokenDto> {
    const tokens = JSON.parse(localStorage.getItem('auth') || '{}') as ResponseTokenDto;
    const newTokens = await this.post<ResponseTokenDto>(
      ENDPOINTS.auth.refresh.url,
      null,
      { customHeaders: { Authorization: `Bearer ${tokens.refreshToken}` } },
    );
    localStorage.setItem('auth', JSON.stringify(newTokens));
    return newTokens;
  }
}
