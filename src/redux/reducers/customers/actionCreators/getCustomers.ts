import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNameThunk } from '../helpers';

export const getCustomes = createAsyncThunk(
  getNameThunk('getCustomers'),
  async (filter, { rejectWithValue }) => {
    try {
      
      // TODO: stopped here
      // const customersService = new CustomersService();
      // const { data } = await customersService.getCustomers(createUrlQueryString(BASE_CUSTOMERS_URL, filter));

      // return data.map((eventModelRes) => buildEvent(eventModelRes));
    } catch (error) {
      // return rejectWithValue(error as TRejectValue);
    }
  },
);
