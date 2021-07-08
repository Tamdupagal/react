import React, { useState, useEffect, useContext } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import ClassroomActions from "./../Components/Actions/ClassroomActions";
import { useHistory } from "react-router";
import { getAllClassrooms, getAllCourses } from "../action/actions";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
// import Classroom from "../CRUD/Classroom";
import { AppContext } from "../AppContext";
import Table from "../Components/Table/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import { classroomData, classroomColumn } from "../Helpers/classroomData";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const OneToOne = () => {
  const classes = useStyles();
  const history = useHistory();
  // const [data, setData] = useState();
  const { state, dispatch } = useContext(AppContext);
  const CLASSROOM_DATA = state?.classroomData;
  // const student = state.studentData
  useEffect(() => {
    getAllClassrooms(dispatch);
    getAllCourses(dispatch)

    console.log("hy");
  }, []);
  // const getClassroomAll = () => {
  //   Classroom.getAll()
  //     // fetch("https://jsonplaceholder.typicode.com/users")
  //     // .then(res => res.json())
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res);
  //       // console.log(data)
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  const handleAddNewClassroom = () => {
    history.push({
      pathname: "/classroom/create",
      state: {courses: state.coursesData.courses}
    });
  };
  // const Columns = [
  //   { title: "Name", field: "name" },
  //   { title: "Type", field: "classroom_type" },
  //   // { title: "Name", field: "students",render: (row) => (<div>demo class for {row.classroom_type}</div>) },
  //   // { title: "Teacher", field: "teacher" },
  //   // { title: "Student", field: "student" },
  //   // {
  //   //   title: "Lectures Completed",
  //   //   field: "LecturesComplete",
  //   //   render: (row) => <div>Hello</div>,
  //   // },
  //   {
  //     title: "Actions",
  //     field: "name",
  //     render: (row) => (
  //       <div>
  //         <ClassroomActions
  //           data={row}
  //           handleEditClassroom={props.handleEditClassroom}
  //         />
  //       </div>
  //     ),
  //   },

  //   // { title: "ID", field: "id" },
  //   // { title: "Email", field: "email" },
  //   // { title: "Phone", field: "phone" },
  //   // { title: "Web Link", field: 'website' }
  // ];
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
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
                <Box
                  display="flex"
                  justifyContent="space-between"
                  // style={{ paddingBottom: "5%" }}
                >
                  <Typography className={classes.title}>CLASSROOM</Typography>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAddNewClassroom}
                  >
                    Add new Classroom
                  </Button>
                </Box>
              </Container>
            </Container>
            <Container>
              {
                // CLASSROOM_DATA.isLoading ? <CircularProgress /> : CLASSROOM_DATA.anyError ?
                // <div>
                //     Ops! Data could not be loaded, try again .
                // </div>
                // :
                <Table
                  data={classroomData(state)}
                  column={classroomColumn(true)}
                />
              }
            </Container>
          </Grid>
        </Box>
      </Container>
      {/* <div>{data}</div> */}
    </div>
  );
};

export default OneToOne;
