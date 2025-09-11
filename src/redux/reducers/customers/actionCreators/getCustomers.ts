import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNameThunk } from '../helpers';
import { TCustomer } from '../types';

export const getCustomes = createAsyncThunk<TCustomer[]>(
  getNameThunk('getCustomers'),
  async (filter, { rejectWithValue }) => {
    try {
      // TODO: stopped here
      // const customersService = new CustomersService();
      // const { data } = await customersService.getCustomers(createUrlQueryString(BASE_CUSTOMERS_URL, filter));
      // return data.map((eventModelRes) => buildEvent(eventModelRes));
      return [{ name: '// todo: this is mock' }] as TCustomer[];
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
