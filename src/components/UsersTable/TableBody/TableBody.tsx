import React from "react";
import { User } from "../../../redux/store.types";

interface TableBodyProps {
  users: User[];
}

const TableBody: React.FC<TableBodyProps> = ({ users }) => {
  return (
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
  );
};

export default TableBody;
