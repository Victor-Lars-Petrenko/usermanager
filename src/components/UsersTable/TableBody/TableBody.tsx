import React from "react";
import { User } from "../../../redux/store.types";

import css from "./TableBody.module.css";

interface TableBodyProps {
  users: User[];
}

const TableBody: React.FC<TableBodyProps> = ({ users }) => {
  return (
    <tbody>
      {users.map(user => (
        <tr key={user.id} className={css.tableBodyRow}>
          <td className={css.tableBodyCell}>{user.name}</td>
          <td className={css.tableBodyCell}>{user.username}</td>
          <td className={css.tableBodyCell}>{user.email}</td>
          <td className={css.tableBodyCell}>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
