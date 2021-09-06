export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "username",
    accessor: "username",
  },
  {
    Header: "posts",
    accessor: "posts",
  },
  {
    Header: "Detail",
    accessor: "Detail",
    Cell: (cell) => (
      <button value={cell.accessor} name={cell.accessor}>
        Detail
      </button>
    ),
  },
];
