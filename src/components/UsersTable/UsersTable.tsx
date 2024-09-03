import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  selectUsersError,
  selectUsers,
  selectUsersLoading,
} from "../../redux/users/users-selectors";
import { setFilters } from "../../redux/filters/filters-actions";
import { tableHeadItems } from "../../assets/items/tableHeadItems";
import { Filter } from "../../redux/store.types";
import { selectFilter } from "../../redux/filters/filters-selectors";

const UsersTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const filter = useSelector(selectFilter) || {};

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newFilter: Partial<Filter> = { [name]: value };

    dispatch(setFilters(newFilter));
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
              {tableHeadItems.map(item => {
                const key = item as keyof Filter;
                const placeholder = `Filter by ${item}`;
                let value = filter[key] || "";

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
