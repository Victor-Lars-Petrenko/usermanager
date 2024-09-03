import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersApi from "../../api/users-api";
import { User } from "../store.types";

type FetchUsersResponse = User[];

type RejectWithValue = string;

export const fetchUsers = createAsyncThunk<
  FetchUsersResponse,
  void,
  { rejectValue: RejectWithValue }
>("users/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const { data } = await usersApi.getUsersRequest();
    return data as FetchUsersResponse;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
