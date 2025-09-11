import { createSlice } from "@reduxjs/toolkit";
import { TUsersState } from "./types";
import { getUsers } from "./actionCreators/getUsers";

const initialState: TUsersState = {
  allUsers: [],
  isLoading: false,
  filter: undefined,
  direction: undefined,
  offset: undefined,
  limit: undefined,
  total: 0,
};

const { actions, reducer: usersReducer } = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.allUsers = payload.data;
      state.total = payload.total;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.allUsers = [];
      state.total = 0;
      state.isLoading = false;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export { usersReducer, actions }
