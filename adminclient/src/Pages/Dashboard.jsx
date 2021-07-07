import React, { useEffect, useState, useContext } from "react";
import { Container, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./../Styles/Dashboard";
import { StudentData, StudentColumn } from "../Helpers/StudentData";
import { AppContext } from "../AppContext";
import { getAllStudents, getAllTeachers } from "../action/actions";
import Table from "../Components/Table/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import { teacherColumn, teacherData } from "../Helpers/teacherData";

const Dashboard = () => {
  // constructor(){
  //   super();
  //   this.toggleMe = this.toggleMe.bind(this)
  //   this.state = {
  //     paperActive = null
  //   }
  // }
  const classes = useStyles();
  const [tableFor, setTableFor] = useState("");
  // const [leftborder,setLeftborder] = useState("")
  const { dispatch, state } = useContext(AppContext);
  const STUDENT_DATA = state?.studentData;
  const TEACHER_DATA = state?.teacherData;
  const [paperActive, setPaperActive]=useState(null)
  // const data = "Hi"

  // const setLeftborder = () => {
  //   style = {{ borderLeft: "4px solid red" }  }
  const toggleMe = (value) => {
    setPaperActive(value)
  }

  const handleStudents = () => {
    setTableFor("students");
    getAllStudents(dispatch);
    toggleMe("students")
  };
  const handleTeachers = () => {
    setTableFor("teachers");
    getAllTeachers(dispatch);
    toggleMe("teachers")
  };
  const handleClasses = () => {
    setTableFor("classes");
    toggleMe("classes")
  };
  const handleLectures = () => {
    setTableFor("lectures");
    toggleMe("lectures")
  };

  function getTabulerData(table_for) {
    switch (table_for) {
      case "students":
        return STUDENT_DATA.isLoading ? (
          <CircularProgress />
        ) : STUDENT_DATA.anyError ? (
          <div>Ops! Data could not be loaded, try again .</div>
        ) : (
          <Table data={StudentData(state)} column={StudentColumn()} />
        );
      case "teachers":
        return TEACHER_DATA.isLoading ? (
          <CircularProgress />
        ) : TEACHER_DATA.anyError ? (
          <div>Ops! Data could not be loaded, try again .</div>
        ) : (
          <Table data={teacherData(state)} column={teacherColumn()} />
        );
      case "classes":
      // return <Table data={StudentData(state)} column={StudentColumn()}/>
      case "lectures":
      // return <Table data={StudentData(state)} column={StudentColumn()}/>
    }
  }

  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              className={paperActive==="classes"? classes.paperActive:classes.paper}
              onClick={handleClasses}
            >
              <div className={classes.content}>
                83
                <Typography>Classes</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              className={paperActive==="students"? classes.paperActive:classes.paper}
              onClick={handleStudents}
              style={{ cursor: "pointer" }}
            >
              <div className={classes.content}>
                86
                <Typography>Students</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              className={paperActive==="teachers"? classes.paperActive:classes.paper}
              onClick={handleTeachers}
              style={{ cursor: "pointer" }}
            >
              <div className={classes.content}>
                9<Typography>Teachers</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card 
              className={paperActive==="lectures"? classes.paperActive:classes.paper}
              onClick={handleLectures}
              style={{ cursor: "pointer" }}>
              <div className={classes.content}>
                42
                <Typography>Total Lectures</Typography>
              </div>
            </Card>
          </Grid>
          <Divider />
        </Grid>
        <Container style={{ marginTop: "2vh", width: "100%", height: "100%" }}>
          {getTabulerData(tableFor)}
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
