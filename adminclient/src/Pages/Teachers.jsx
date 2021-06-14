import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import TeacherActions from "../Components/Actions/TeacherActions";
import { teacherData } from "../Helpers/teacherData";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
  mainHeading: {
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
});

const Teachers = () => {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState();

  useEffect(() => {
    setData(teacherData);
  }, []);

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };
  const Columns = [
    { title: "NAME", field: "Name" },
    { title: "EMAIL", field: "email" },
    {
      title: "PHONE NO.",
      field: "phone",
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
      <div>
        <h1 className={classes.mainHeading}>Teachers Detail</h1>
      </div>
      <Container>
        <Box display="flex" justifyContent="center">
          <Grid item lg={10}>
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
                <Box display="flex" justifyContent="space-between">
                  <Typography className={classes.title}>TEACHERS</Typography>

                  <Button variant="contained" color="secondary">
                    Add new Teacher
                  </Button>
                </Box>
              </Container>
            </Container>
            <Container>
              {" "}
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

                  rowStyle: (rowData) => ({
                    backgroundColor:
                      rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
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
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Teachers;
