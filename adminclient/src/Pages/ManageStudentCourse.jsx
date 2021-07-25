import React, { useContext, useEffect } from "react";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { StudentData, StudentColumn } from "./../Helpers/StudentData";
import { AppContext } from "../AppContext";
import { getAllClassrooms, getAllStudentCourses, getAllStudents } from "../action/actions";
import Table from "../Components/Table/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import ManageStudentCourseActions from "./../Components/Actions/ManageStudentCourseActions";
import { useLocation } from "react-router-dom";
import { ManageStudentCourseColumn, ManageStudentCourseData } from "../Helpers/ManageStudentCourses";

const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
  container: {
    border: "1px solid #e6e6ff",
    borderBottom: "white",
    backgroundColor: "white",
    padding: "1%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

const ManageStudentCourse = () => {
  const classes = useStyles(); 
  const history = useHistory();
  const {dispatch} = useContext(AppContext)
  const location = useLocation()
  const courses = location.state.data
  useEffect(() => {
    // getAllStudentCourses(dispatch)
  }, [])
  // const { state, dispatch } = useContext(AppContext);

  // useEffect(() => {
  //   getAllStudents(dispatch);
  //   console.log(state.studentData);
  // }, []);

  // const Columns = [
  //   { title: "Course", field: "name" },
  //   {
  //     title: "Actions",
  //     field: "name",
  //     render: (row) => (
  //       <div>
  //         <ManageStudentCourseActions />
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Grid item xs={12} lg={10}>
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
                <Typography className={classes.title}>
                  {" "}
                  Manage Course for {courses.name}
                </Typography>

                {/* <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddStudent}
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  Add new Student
                </Button> */}
              </Box>
            </Container>
          </Container>

          <Container>
            <Table data={ManageStudentCourseData(courses)} column={ManageStudentCourseColumn()} />
          </Container>
        </Grid>
      </Box>
    </div>
  );
};

export default ManageStudentCourse;
