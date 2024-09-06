import React from "react";
import { filtersItems } from "../../../assets/items/filtersItems";
import { Filters } from "../../../redux/store.types";

import css from "./TableHead.module.css";

interface TableHeadProps {
  filters: Filters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHead: React.FC<TableHeadProps> = ({ filters, onChange }) => {
  return (
    <thead className={css.tableHead}>
      <tr>
        {filtersItems.map(item => {
          const key = item as keyof Filters;
          const placeholder = `Filter by ${item}`;
          const value = filters[key];

          return (
            <th key={item} className={css.tableHeadCell}>
              <input
                type="text"
                name={item}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={css.input}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
