import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Pages/Dashboard";
import { Container } from "react-bootstrap";
import Enroll from "./Pages/Enroll";
import MeetTable from "./Pages/MeetTable";
import AddNewLearningSkills from "./Components/TextEditor/AddNewLearningSkills";
import AddCourseActivity from "./Components/TextEditor/AddCourseActivity";
import AddSpiritualLearning from "./Components/TextEditor/AddSpiritualLearning";
import OneToOne from "./Pages/OneToOne";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Courses from "./Pages/Courses";
import AddMeet from "./Pages/AddMeet";
import AddStudent from "./Pages/AddStudent";
import Students from "./Pages/Students";
import AddTeacher from "./Pages/AddTeacher";
import TeacherDetails from "./Pages/TeacherDetails";
import TeacherTimeline from "./Pages/TeacherTimeline";
import AddCourse from "./Components/Courses/AddCourse";
import AddNewRoom from "./Pages/AddNewRoom";
import AddCRM from "./Pages/AddCRM";
import AddAdmin from "./Pages/AddAdmin";
import { makeStyles } from "@material-ui/core";
import Copyright from "./Copyright";
import AddNewClassroom from "./Pages/AddNewClassroom";
import Attendance from "./Pages/Attendance";
import StudentCourses from "./Pages/StudentCourses";
import ManageStudentCourse from "./Pages/ManageStudentCourse";
import AddLecture from "./Pages/AddLecture";
import AddNewLecture from "./Pages/AddNewLecture";

let marginLeft;
if (window.innerWidth <= 700) marginLeft = "0px";
else marginLeft = "250px";

const useStyles = makeStyles({
  root: {
    marginLeft: `${marginLeft}`,
    marginTop: 100,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <SideBar />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/enroll" component={Enroll} />
            <Route exact path="/meetLink" component={MeetTable} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/classroom" component={OneToOne} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/student-courses" component={StudentCourses} />
            <Route exact path="/attendances" component={Attendance} />
            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/add-meet" component={AddMeet} />
            <Route exact path="/add-student" component={AddStudent} />
            <Route exact path="/add-teacher" component={AddTeacher} />
            <Route exact path="/add-course" component={AddCourse} />
            <Route exact path="/classroom/create" component={AddNewClassroom} />
            <Route exact path="/new-room" component={AddNewRoom} />
            <Route exact path="/teacher-details" component={TeacherDetails} />
            <Route exact path="/add-crm" component={AddCRM} />
            <Route exact path="/add-admin" component={AddAdmin} />
            <Route exact path="/teacher-timeline" component={TeacherTimeline} />
            <Route exact path="/students-table" component={Students} />
            <Route exact path="/add-lecture" component={AddLecture} />
            <Route exact path="/lectures/create" component={AddNewLecture} />

            <Route
              exact
              path="/student-courses/manage"
              component={ManageStudentCourse}
            />
            <Route
              exact
              path="/AddNewLearningSkills"
              component={AddNewLearningSkills}
            />
            <Route
              exact
              path="/AddCourseActivity"
              component={AddCourseActivity}
            />
            <Route
              exact
              path="/AddSpiritualLearning"
              component={AddSpiritualLearning}
            />
          </Switch>
        </div>
        {/* <div style={{ marginLeft: 250,marginBottom: "0px"}}>
          <Copyright />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
