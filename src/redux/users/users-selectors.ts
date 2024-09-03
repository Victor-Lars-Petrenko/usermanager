import { State } from "../store.types";

export const selectUsers = (state: State) => state.users.items;

export const selectUsersLoading = (state: State) => state.users.isLoading;

export const selectUsersError = (state: State) => state.users.error;
