import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Button, Container, Box, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { MTableToolbar, MTableBodyRow } from "material-table";
import { attendanceData } from "./../Helpers/attendanceData";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const StudentCourses = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    setData(attendanceData);
  }, []);

  const handleManageCourse = () => {
    history.push("/student-courses/manage");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    {
      title: "Student",
      field: "student",
      Style: { border: "0.5px solid #ccc" },
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
        <div style={{ fontWeight: "700" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#17a2b8",
              padding: "2%",
              color: "white",
              fontSize: "small",
            }}
            onClick={handleManageCourse}
          >
            <CreateIcon /> Manage Student Course
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Container>
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
          <Box
            display="flex"
            justifyContent="space-between"
            // style={{ paddingBottom: "5%" }}
          >
            <Typography className={classes.title}>STUDENT COURSES</Typography>
          </Box>
        </Container>{" "}
        <MaterialTable
          title=""
          data={data}
          columns={Columns}
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
            },
            cellStyle: {
              border: "0.5px solid #ccc",
            },
            rowStyle: (rowData) => ({
              backgroundColor:
                rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
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

export default StudentCourses;
