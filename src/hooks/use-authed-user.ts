import { jwtDecode } from "jwt-decode";
import { ResponseTokenDto } from '../api/dto/auth/response-token.dto';
import { useLocalstorage } from "./use-local-storage";
import { JwtPayloadDto } from '../api/dto/auth/jwt-payload.dto';
export const useAuthedUser = ():JwtPayloadDto => {
  const [{ accessToken }] = useLocalstorage<ResponseTokenDto>('auth', { accessToken: '', refreshToken: '' });
  const userId = accessToken && jwtDecode<JwtPayloadDto>(accessToken)?.sub;
  return { sub: userId };
};