import React from "react";
import { MTableBodyRow } from "material-table";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableRow: {
    "&:hover": { backgroundColor: "#fafaf2 !important" },
  },
});
function Table({ data, column }) {
  const classes = useStyles();
  return (
    <MaterialTable
      title=""
      data={data}
      columns={column}
      options={{
        exportButton: true,
        border: true,

        headerStyle: {
          border: "0.5px solid #ccc",
          backgroundColor: "#007399",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "800",
          fontFamily: "KoHo, sans-serif",
          letterSpacing: "0.07rem",
          "&:hover": { color: "white !important" },
        },

        rowStyle: (rowData) => ({
          backgroundColor: rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
          fontWeight: "600",
          fontSize: "1rem",
          rowStyle: "#486684",
        }),
        cellStyle: {
          border: "0.5px solid #ccc",
        },
      }}
      components={{
        Row: (props) => (
          <MTableBodyRow className={classes.tableRow} {...props} />
        ),
      }}
    />
  );
}

export default Table;
