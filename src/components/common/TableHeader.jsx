import React from "react";
import "font-awesome/css/font-awesome.css";


const TableHeader = (props) => {
  const { columns, onSort , sortIcon } = props;


  return (
      <thead>
        <tr>
          {columns.map(column => (<th key={column.path || column.key } onClick={() => onSort(column.path)}> {column.label} {sortIcon(column.path)} </th>))}
        </tr>
      </thead>
  );
};

export default TableHeader;