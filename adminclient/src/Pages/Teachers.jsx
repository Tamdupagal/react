import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Box,Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
// import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { MTableToolbar, MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import TeacherActions from "./TeacherActions";
import { attendanceData } from "./../Helpers/attendanceData";


const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "	#e6e6ff !important" } },
});

const Teachers = () => {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState();

  useEffect(() => {
    setData(attendanceData);
  }, []);
    

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    {
      title: "Student",
      field: "student",
      Style: { border: "1px solid black" },
    },
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
          {/* <Button
            variant="contained"
            style={{
              backgroundColor: "#17a2b8",
              padding: "2%",
              color: "white",
              fontSize: "small",
            }}
            onClick={handleAttendanceReport}
          >
            <CreateIcon /> View Attendance Report
          </Button> */}
          <TeacherActions />
        </div>
      ),
    },
  ];
  return (
    <div>
      
      <Container >
        <Container
          style={{
            border: "1px solid #e6e6ff",
            borderBottom: "white",
            backgroundColor: "white",
            padding: "1%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          
        >
          <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"            
          >
            Add new Teacher
          </Button>
          </Box>
        </Container>
      </Container>
      <Container>
        {" "}
        <MaterialTable
          title="Teachers"
          data={data}
          columns={Columns}
          options={{
            exportButton: true,
            border: true,

            headerStyle: {
              border: "0.5px solid #ccc",
              backgroundColor: "#9cb3c9",
              fontSize: "1.2rem",
              fontWeight: "800",
              fontFamily: "KoHo, sans-serif",
              letterSpacing: "0.07rem",
            },

            rowStyle: (rowData) => ({
              backgroundColor:
                rowData.tableData.id % 2 === 0 ? "#FFF" : "#eff2f6",
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
      </Container>
    </div>
  );
};

export default Teachers;
