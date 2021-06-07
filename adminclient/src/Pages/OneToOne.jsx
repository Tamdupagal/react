import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { attendanceData } from "../Helpers/attendanceData";
import { MTableToolbar, MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "	#e6e6ff !important" } },
});

const OneToOne = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  useEffect(() => {
    setData(attendanceData);
  }, []);

  const handleAddNewClassroom = () => {
    history.push("/classroom/create");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    { title: "Student", field: "student" },
    {
      title: "Lectures Completed",
      field: "LecturesComplete",
      render: (row) => <div>Hello</div>,
    },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <ClassroomActions />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container>
        {" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddNewClassroom}
        >
          Add new Classroom
        </Button>
        <MaterialTable
          title="Classrooms"
          data={data}
          columns={Columns}
          options={{
            exportButton: true,
            headerStyle: {
              border: "0.5px solid #ccc",
              backgroundColor: "#9cb3c9",
              fontSize: "1.2rem",
              fontWeight: "800",
              fontFamily: "KoHo, sans-serif",
              letterSpacing: "0.07rem",
            },
            cellStyle: {
              border: "0.5px solid #ccc",
            },
            rowStyle: (rowData) => ({
              backgroundColor:
                rowData.tableData.id % 2 === 0 ? "#FFF" : "#eff2f6",
              fontWeight: "600",
              fontSize: "1rem",
              rowStyle: "#486684",
            }),
          }}
          components={{
            Row: (props) => (
              <MTableBodyRow className={classes.tableRow} {...props} />
            ),
          }}
        />
      </Container>
    </div>
  );
};

export default OneToOne;
