export type TAuthedUser = {
  id: string;
  name: string;
};

export type TAuthedUserState = {
  authedUser: TAuthedUser | null;
  isLoading: boolean;
};