import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Container, Box, Typography, Grid } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { useHistory } from "react-router";
import { attendanceData } from "../Helpers/attendanceData";
import { makeStyles } from "@material-ui/core/styles";
import { MTableBodyRow } from "material-table";

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

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };
  useEffect(() => {
    setData(attendanceData);
  }, []);

  const Columns = [
    { title: "CLASSROOM", field: "classroom" },
    { title: "LECTURE ON", field: "lectureOn" },
    {
      title: "TOTAL",
      field: "total",
      Style: { border: "1px solid black" },
    },
    {
      title: "ABSENT",
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
      <Container style={{marginBottom: "120px"}}>
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
                }),
              }}
              components={{
                Row: (props) => (
                  <MTableBodyRow className={classes.tableRow} {...props} />
                ),
              }}
            />
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Attendance;
