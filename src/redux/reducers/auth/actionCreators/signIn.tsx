import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNameThunk } from '../helpers';
import { AuthService } from 'src/api/services/auth-service';
import { AuthDto } from 'src/api/dto/auth/auth.dto';
import { UsersService } from 'src/api/services/users-service';
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadDto } from 'src/api/dto/auth/jwt-payload.dto';
import { MESSAGES } from 'src/constants/constants';
import { LOCAL_STORAGE_AUTH_KEY } from 'src/constants/constants';
import { TUser } from '../../users/types';

export const signIn = createAsyncThunk(getNameThunk('signIn'), async (credentials: AuthDto, { rejectWithValue }) => {
  const authService = new AuthService();
  const usersService = new UsersService();
  const tokens = await authService.signIn(credentials);

  if (!tokens.accessToken) {
    console.error(MESSAGES.signInFailed);
    return rejectWithValue(MESSAGES.signInFailed);
  }

  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(tokens));

  const id = tokens.accessToken && jwtDecode<JwtPayloadDto>(tokens.accessToken)?.sub;
  const data = await usersService.getById(id!);
  const user: TUser = {
    id: data.id,
    name: data.name,
    email: data.email,
  };

  return { user };
});
