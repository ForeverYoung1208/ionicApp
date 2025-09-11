import { createSlice } from "@reduxjs/toolkit";
import { getCustomes } from "./actionCreators/getCustomers";
import { TCustomersState } from './types';

const initialState: TCustomersState = {
  allCustomers: [],
  isLoading: false,
};

const { actions, reducer: customersReducer } = createSlice({
  name: 'customers',
  initialState: initialState,
  reducers: {
    setCustomers(state, action) {
      state.allCustomers = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCustomes.fulfilled, (state, action) => {
      state.allCustomers = action.payload;
    });
  },
});

export { customersReducer, actions }