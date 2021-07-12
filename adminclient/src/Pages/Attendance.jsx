import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Container, Box, Typography, Grid } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { useHistory } from "react-router";
import { AttendanceColumn, AttendanceData, } from "../Helpers/attendanceData";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../Components/Table/Table";
import { AppContext } from "../AppContext";
import { getAllClassrooms } from "../action/actions";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const Attendance = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  const {state, dispatch} = useContext(AppContext)

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };
  useEffect(() => {
    getAllClassrooms(dispatch)
  }, []);

  const Columns = [
    { title: "Classroom", field: "classroom" },
    { title: "Lecture On", field: "lectureOn" },
    {
      title: "Total",
      field: "total",
      Style: { border: "1px solid black" },
    },
    {
      title: "Absent",
      field: "absent",
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
            onClick={handleAttendanceReport}
          >
            <CreateIcon /> View Attendance Report
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Box display="flex" justifyContent="center">
          <Grid item lg={10}>
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
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.title}>ATTENDANCES</Typography>
              </Box>
            </Container>{" "}
            <Table data={AttendanceData(state)} column={AttendanceColumn(dispatch)}/>
            </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Attendance;
