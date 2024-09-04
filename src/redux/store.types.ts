export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type Filters = {
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
  filters: Filters;
}
