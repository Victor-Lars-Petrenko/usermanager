export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type Filter = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export interface Users {
  items: User[];
  isLoading: boolean;
  error: string | null;
}

export interface State {
  users: Users;
  filter: Filter;
}
