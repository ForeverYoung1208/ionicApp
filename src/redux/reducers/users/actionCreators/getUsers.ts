import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNameThunk } from '../helpers';
import { TUser } from '../types';
import { UsersService } from 'src/api/services/users-service';
import { IListResponse } from 'src/interfaces/list-response.interface';

export const getUsers = createAsyncThunk< IListResponse<TUser> >(
  getNameThunk('getUsers'),
  async (filter, { rejectWithValue }) => {
    try {
      const usersService = new UsersService();
      const { data, total } = await usersService.getAll();
      
      const users = data.map(user => (
        {
          id: user.id,
          name: user.name,
          email: user.email
        } as TUser
      ));

      return { data: users, total };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);
