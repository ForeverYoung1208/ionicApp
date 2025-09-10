import { TRootState } from "../store/rootReducer";

export const allCustomersSelector = (state: TRootState) => state.customers.allCustomers;
export const isCustomersLoading = (state: TRootState) => state.customers.isLoading;
