import { transport } from "../transport/transport";
import { ENDPOINTS } from "../constants";
import { UserDto } from '../dto/users/user.dto';
import { IListResponse } from '../../interfaces/list-response.interface';

export class UsersService {
  async getAll() {
    const response = await transport.get<IListResponse<UserDto>>(ENDPOINTS.users.getAll.url);
    return response;
  }
}