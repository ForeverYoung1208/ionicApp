import { combineReducers } from 'redux';
import { customersReducer } from '../reducers/customers/customersSlice';
import { usersReducer } from '../reducers/users/usersSlice';
import { authReducer } from '../reducers/auth/authSlice';

export const rootReducer = combineReducers({
  customers: customersReducer,
  users: usersReducer,
  auth: authReducer,
});
export type TRootState = ReturnType<typeof rootReducer>;
