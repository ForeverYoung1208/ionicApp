import { createSlice } from "@reduxjs/toolkit";
import { signIn } from './actionCreators/signIn';
import { TAuthedUserState } from './types';
import { signOut } from './actionCreators/signOut';

const initialState: TAuthedUserState = {
  authedUser: null,
  isLoading: false,
};

const { actions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.authedUser = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.authedUser = null;
      state.isLoading = false;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.authedUser = null;
      state.isLoading = false;
    });
  },
});

export { authReducer, actions }