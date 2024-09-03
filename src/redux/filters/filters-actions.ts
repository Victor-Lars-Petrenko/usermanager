import { createAction } from "@reduxjs/toolkit";
import { Filter } from "../store.types";

export const setFilters = createAction<Partial<Filter>>("filters/set");
