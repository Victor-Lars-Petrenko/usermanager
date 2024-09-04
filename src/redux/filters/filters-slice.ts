import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setFilters } from "./filters-actions";
import { Filters } from "../store.types";

const initialState: Filters = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      setFilters,
      (state, action: PayloadAction<Partial<Filters>>) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    );
  },
});

export default filterSlice.reducer;
