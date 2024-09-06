import React from "react";
import { useSelector } from "react-redux";

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
import Loader from "../Loader";

import css from "./UsersTable.module.css";
import useAppDispatch from "../../assets/hooks/useAppDispatch";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectFilteredUsers);
  const isLoading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const filters = useSelector(selectFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.logo}></div>
        <h1 className={css.title}>User Management Table</h1>
      </header>
      <main className={css.container}>
        {isLoading && <Loader />}
        {error && !isLoading && <div>{error}</div>}
        <div className={css.tableWrapper}>
          <table className={css.table}>
            <TableHead filters={filters} onChange={handleFilterChange} />
            {users[0] && !isLoading && <TableBody users={users} />}
          </table>
        </div>
        {!users[0] && !isLoading && (
          <div className={css.noUsers}>
            <p className={css.noUsersText}>
              No users are available for your request
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default UsersTable;
