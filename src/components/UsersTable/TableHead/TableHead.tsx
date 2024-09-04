import React from "react";
import { filtersItems } from "../../../assets/items/filtersItems";
import { Filters } from "../../../redux/store.types";

interface TableHeadProps {
  filters: Filters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHead: React.FC<TableHeadProps> = ({ filters, onChange }) => {
  return (
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
                onChange={onChange}
                value={value}
              />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
