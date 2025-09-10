import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./actionCreators/signIn";
import { signOut } from "./actionCreators/signIn";

const initialState = {
  user: null,
  isLoading: false,
};

const { actions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.user = null;
      state.isLoading = false;
    });
    
    builder.addCase(signOut.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
    });
  },
});

export { authReducer, actions }