import { createSelector } from "@reduxjs/toolkit";
import { selectUsers } from "../users/users-selectors";
import { State, Filter } from "../store.types";

export const selectFilter = (state: State): Filter => state.filter;

export const selectFilteredUsers = createSelector(
  [selectFilter, selectUsers],
  (filter, users) => {
    let filteredUsers = users;

    (Object.keys(filter) as Array<keyof Filter>).forEach(key => {
      const normalizedValue = filter[key]?.trim().toLowerCase();
      if (normalizedValue) {
        filteredUsers = filteredUsers.filter(user =>
          user[key]?.toString().toLowerCase().includes(normalizedValue)
        );
      }
    });

    return filteredUsers;
  }
);

export default selectFilter;
