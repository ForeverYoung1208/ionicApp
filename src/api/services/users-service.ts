import { transport } from "../transport/transport";
import { ENDPOINTS } from "../constants";
import { UserDto } from '../dto/users/user.dto';
import { IListResponse } from '../../interfaces/list-response.interface';

export class UsersService {
  async getAll(): Promise<IListResponse<UserDto>> {
    const response = await transport.useEndpoint<IListResponse<UserDto>>(ENDPOINTS.users.getAll);
    return response;
  }

  async getById(id: string): Promise<UserDto> {
    const response = await transport.useEndpoint<UserDto>(ENDPOINTS.users.getById, null, { id });
    return response;
  }
}