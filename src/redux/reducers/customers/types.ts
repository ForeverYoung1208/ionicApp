export type TCustomer = {
  name: string;
}

export type TCustomersState = {
  allCustomers: TCustomer[];
  isLoading: boolean;
};
