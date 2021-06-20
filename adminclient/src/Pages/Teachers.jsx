import React, { useState, useEffect, useContext} from "react";
import { Box, Button, Container, Typography, } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import TeacherActions from "../Components/Actions/TeacherActions";
import { teacherData, teacherColumn } from "../Helpers/teacherData";
import { AppContext } from "../AppContext";
import { getAllTeachers } from "../action/actions";
import Table from '../Components/Table/Table'
import CircularProgress from '@material-ui/core/CircularProgress';


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
  const { state, dispatch } = useContext(AppContext)
  const TEACHER_DATA = state?.teacherData

  const handleAddTeacher = () => {
    history.push("/add-teacher")
  }
  const [data, setData] = useState();

  useEffect(() => {
    // getTeacherAll()
    getAllTeachers(dispatch)
  }, []);

  // const getTeacherAll = () => {
  //   Teacher.getAll()
  //   .then(res =>{
  //     setData(res.data)
  //     console.log(res)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   });
  // }

  // const Columns = [
  //   { title: "NAME", field: "name" },
  //   { title: "EMAIL", field: "email" },
  //   {
  //     title: "PHONE NO.",
  //     field: "primary_phone_number",
  //   },
  //   {
  //     title: "Actions",
  //     field: "name",
  //     render: (row) => (
  //       <div>
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
  //         <TeacherActions />
  //       </div>
  //     ),
  //   },
  // ];
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
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.title}>TEACHERS</Typography>

            <Button variant="contained" color="secondary" 
            onClick={handleAddTeacher}>
              Add new Teacher
            </Button>
          </Box>
        </Container>
      </Container>

      <Container>
        {TEACHER_DATA.isLoading ? <CircularProgress /> : TEACHER_DATA.anyError ?
          <div>
              Ops! Data could not be loaded, try again .
          </div>
          :
          <Table data={teacherData(state)} column={teacherColumn(true)} />
        }
      </Container>
    </div>
  );
};

export default Teachers;
