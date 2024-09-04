import { createSelector } from "@reduxjs/toolkit";
import { selectUsers } from "../users/users-selectors";
import { State, Filters } from "../store.types";
import { filtersItems } from "../../assets/items/filtersItems";

export const selectFilters = (state: State): Filters => state.filters;

export const selectFilteredUsers = createSelector(
  [selectFilters, selectUsers],
  (filters, users) => {
    let filteredUsers = users;

    (Object.keys(filters) as Array<keyof Filters>).forEach(key => {
      if (!filtersItems.includes(key)) {
        return;
      }

      const normalizedValue = filters[key]?.trim().toLowerCase();
      if (normalizedValue) {
        filteredUsers = filteredUsers.filter(user =>
          user[key].toLowerCase().includes(normalizedValue)
        );
      }
    });

    return filteredUsers;
  }
);
