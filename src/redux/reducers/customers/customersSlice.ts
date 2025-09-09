import { createSlice } from "@reduxjs/toolkit";
import { getCustomes } from "./actionCreators/getCustomers";

type TCustomer = {
  name: string;
}

type TCustomerState = {
  allCustomers: TCustomer[]
  isLoading: boolean
}


const initialState: TCustomerState = {
  allCustomers: [],
  isLoading: false,
};


const {actions, reducer: customersReducer} = createSlice({
  name: 'customers',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCustomes.fulfilled, (state, action) => {
      state.allCustomers = action.payload;
    });
  },
})

export { customersReducer, actions }