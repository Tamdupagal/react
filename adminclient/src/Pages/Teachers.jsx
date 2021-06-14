import React, { useState, useEffect } from "react";
import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { getAllTeachers } from "../action/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { TeacherColumns, TeacherData} from "../Helpers/teacherData";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Table from '../Components/Table/Table'

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const Teachers = () => {
  const classes = useStyles();
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext)
  
  const TEACHER_DATA = state?.teacherData

  useEffect(() => {
    getAllTeachers(dispatch)
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
            <Typography className={classes.title}>TEACHERS</Typography>

            <Button variant="contained" color="secondary">
              Add new Teacher
            </Button>
          </Box>
        </Container>
      </Container>
      <Container>
        {" "}
        {TEACHER_DATA.isLoading ? <CircularProgress /> : TEACHER_DATA.anyError ?
          <Alert variant="outlined" severity="error">
              Ops! Data could not be loaded, try again .
          </Alert>
          :
          <Table data={TeacherData(state)} column={TeacherColumns(true)} />
        }
      </Container>
    </div>
  );
};

export default Teachers;
