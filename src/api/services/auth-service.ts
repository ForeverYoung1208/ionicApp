import { transport } from "src/api/transport/transport";
import { AuthDto } from "../dto/auth.dto";
import { ResponseTokenDto } from "../dto/response-token.dto";
import { ENDPOINTS } from "../constants";

export class AuthService {
  async login(credentials: AuthDto, setTokens: (tokens: ResponseTokenDto) => void) {
    const tokens = await transport.post<ResponseTokenDto>(ENDPOINTS.auth.signin, credentials);
    setTokens(tokens);
  }
}
