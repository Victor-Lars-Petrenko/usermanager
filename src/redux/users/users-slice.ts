import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./users-operations";
import { pending, rejected } from "../../assets/functions/redux";
import { Users, User } from "../store.types";

const initialState: Users = {
  items: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, pending)
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, rejected);
  },
});

export default userSlice.reducer;
