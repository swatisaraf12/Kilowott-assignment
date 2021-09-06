import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import "./BasicTable.css";

const DATA = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    posts: 0,
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    posts: 0,
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
    posts: 0,
  },
];
const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
