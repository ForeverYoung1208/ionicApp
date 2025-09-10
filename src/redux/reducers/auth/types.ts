export type TAuthedUser = {
  id: string;
  name: string;
}

export type TUsersState = {
  authedUser: TAuthedUser | null;
  isLoading: boolean;
};
