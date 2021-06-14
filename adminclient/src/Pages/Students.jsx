import React, { useState, useEffect, useContext} from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { StudentData, StudentColumn} from "./../Helpers/StudentData";
import { AppContext } from "../AppContext";
import { getAllStudents } from "../action/actions";
import Table from '../Components/Table/Table'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const Students = () => {
  const classes = useStyles();
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext)
  
  const STUDENT_DATA = state?.studentData

  useEffect(() => {
    getAllStudents(dispatch)
  }, []);

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };

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
            <Typography className={classes.title}>STUDENTS</Typography>

            <Button variant="contained" color="secondary">
              Add new Student
            </Button>
          </Box>
        </Container>
      </Container>

      <Container>
        {!state.studentData.students.length ? <CircularProgress /> : STUDENT_DATA.anyError ?
          <Alert variant="outlined" severity="error">
              Ops! Data could not be loaded, try again .
          </Alert>
          :
          <Table data={StudentData(state)} column={StudentColumn(true)} />
        }
      </Container>
    </div>
  );
};

export default Students;
