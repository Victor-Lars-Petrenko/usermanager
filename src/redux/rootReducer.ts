import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersReducer from "./users/users-slice";
import filtersReducer from "./filters/filters-slice";

const persistConfig = {
  key: "filters",
  storage,
};

const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer);

const rootReducer = combineReducers({
  users: usersReducer,
  filters: persistedFiltersReducer,
});

export default rootReducer;
