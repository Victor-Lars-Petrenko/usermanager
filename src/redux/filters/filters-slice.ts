import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setFilters } from "./filters-actions";
import { Filter } from "../store.types";

const initialState: Filter = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      setFilters,
      (state, action: PayloadAction<Partial<Filter>>) => {
        return {
          ...state,
          ...action.payload,
        };
      }
    );
  },
});

export default filterSlice.reducer;
