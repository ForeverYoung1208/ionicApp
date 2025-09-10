export type TUser = {
  id: string;
  name: string;
  email: string;
}

export type TUsersState = {
  allUsers: TUser[];
  filter?: string;
  direction?: string;
  offset?: number;
  limit?: number;
  total: number;
  isLoading: boolean;
};
