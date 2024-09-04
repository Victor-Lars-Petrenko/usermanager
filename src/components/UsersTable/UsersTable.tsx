import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  selectUsersError,
  selectUsersLoading,
} from "../../redux/users/users-selectors";
import { setFilters } from "../../redux/filters/filters-actions";
import { filtersItems } from "../../assets/items/filtersItems";
import { Filters } from "../../redux/store.types";
import {
  selectFilters,
  selectFilteredUsers,
} from "../../redux/filters/filters-selectors";

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
      {users.length > 0 && !isLoading ? (
        <table>
          <thead>
            <tr>
              {filtersItems.map(item => {
                const key = item as keyof Filters;
                const placeholder = `Filter by ${item}`;
                const value = filters[key];

                return (
                  <th key={item}>
                    <input
                      type="text"
                      name={item}
                      placeholder={placeholder}
                      onChange={handleFilterChange}
                      value={value}
                    />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {users.map(
              user =>
                user && (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      ) : (
        !isLoading && <div>No users available</div>
      )}
    </main>
  );
};

export default UsersTable;
