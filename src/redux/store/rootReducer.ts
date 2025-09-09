import { combineReducers } from "redux";
import { customersReducer } from "../reducers/customers/customersSlice";

export const rootReducer = (state, action) => {

  return combineReducers({
    customers: customersReducer
  });
};
