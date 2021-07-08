import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Box, Typography, Grid } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { studentCoursesData } from "../Helpers/studentCoursesData";
import Table from "./../Components/Table/Table"
import { StudentCourseColumn, StudentCourseData } from "../Helpers/studentCourses";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppContext } from "../AppContext";
import { getAllStudentCourses } from "../action/actions";

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
  const {state, dispatch} =useContext(AppContext)
  const STUDENT_COURSES_DATA = state?.studentCoursesData

  useEffect(() => {
    // setData(studentCoursesData);
    getAllStudentCourses(dispatch)
  }, []);

  // const handleManageCourse = () => {
  //   history.push("/student-courses/manage");
  // };
  
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
                <Typography className={classes.title}>
                  STUDENT COURSES
                </Typography>
              </Box>
            </Container>{" "}
            {/* <Container> */}
            {STUDENT_COURSES_DATA.isLoading ? (
              <CircularProgress />
            ) : STUDENT_COURSES_DATA.anyError ? (
              <div>Ops! Data could not be loaded, try again .</div>
            ) : (
              <Table data={StudentCourseData(state)} column={StudentCourseColumn()} />
            )}
          {/* </Container> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default StudentCourses;
