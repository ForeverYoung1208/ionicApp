import { TRootState } from "../store/rootReducer";

export const allUsersSelector = (state: TRootState) => state.users.allUsers;
export const totalUsersSelector = (state: TRootState) => state.users.total;
export const isUsersLoading = (state: TRootState) => state.users.isLoading;
