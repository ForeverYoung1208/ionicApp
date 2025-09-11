import { TRootState } from "../store/rootReducer";

export const authedUserSelector = (state: TRootState) => state.auth.authedUser;
export const isAuthLoading = (state: TRootState) => state.auth.isLoading;
