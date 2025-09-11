import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNameThunk } from '../helpers';
import { LOCAL_STORAGE_AUTH_KEY } from 'src/constants/constants';
import { TUser } from '../../users/types';

export const signOut = createAsyncThunk(getNameThunk('signOut'), async () => {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
  const user: TUser | null = null;

  return { user };
});
