import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { setFilters } from "../../redux/filters/filters-actions";
import {
  selectUsersError,
  selectUsersLoading,
} from "../../redux/users/users-selectors";
import {
  selectFilters,
  selectFilteredUsers,
} from "../../redux/filters/filters-selectors";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

const UsersTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const isLoading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const filters = useSelector(selectFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <main>
      <h1>User Management Table</h1>
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>{error}</div>}
      <table>
        <TableHead filters={filters} onChange={handleFilterChange} />
        {users.length > 0 && !isLoading ? (
          <TableBody users={users} />
        ) : (
          !isLoading && <div>No users are available for your request</div>
        )}
      </table>
    </main>
  );
};

export default UsersTable;
