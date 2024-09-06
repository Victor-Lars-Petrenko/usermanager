import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersApi from "../../api/users-api";
import { User } from "../store.types";
import formatPhone from "../../assets/functions/formatPhone";

type FetchUsersResponse = User[];

type RejectWithValue = string;

export const fetchUsers = createAsyncThunk<
  FetchUsersResponse,
  void,
  { rejectValue: RejectWithValue }
>("users/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const { data } = await usersApi.getUsersRequest();
    const users = data.map((user: User) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: formatPhone(user.phone),
    }));
    return users as FetchUsersResponse;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
