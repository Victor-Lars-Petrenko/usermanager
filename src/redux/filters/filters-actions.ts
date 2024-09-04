import { createAction } from "@reduxjs/toolkit";
import { Filters } from "../store.types";

export const setFilters = createAction<Partial<Filters>>("filters/set");
