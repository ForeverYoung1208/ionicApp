import { combineReducers } from 'redux';
import { customersReducer } from '../reducers/customers/customersSlice';
import { usersReducer } from '../reducers/users/usersSlice';

export const rootReducer = combineReducers({
  customers: customersReducer,
  users: usersReducer,
});
export type TRootState = ReturnType<typeof rootReducer>;
