import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";
import Enroll from "./Components/Enrollment/Enroll";
import MeetTable from "./Components/MeetLinks/MeetTable";
import AddNewLearningSkills from "./Components/TextEditor/AddNewLearningSkills";
import AddCourseActivity from "./Components/TextEditor/AddCourseActivity";
import AddSpiritualLearning from "./Components/TextEditor/AddSpiritualLearning";
import OneToOne from "./Components/Classrooms/OneToOne";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Courses from "./Components/Courses/Courses";
import AddMeet from "./Components/MeetLinks/AddMeet";
import AddStudent from "./Components/Students/AddStudent";
import ManageStudentCourse from "./Components/Students/ManageStudentCourse";
import AddTeacher from "./Components/Teacher/AddTeacher";
import TeacherDetails from "./Components/Teacher/TeacherDetails";
import AddCourse from "./Components/Courses/AddCourse";
import AddNewRoom from "./Components/Classrooms/AddNewRoom";
import AddCRM from "./Components/Operations/AddCRM";
import { makeStyles } from "@material-ui/core";
import Copyright from "./Copyright";
import AddNewClassroom from "./Components/Classrooms/AddNewClassroom";

// const useStyles = makeStyles( () => ({
//   mobile: {
//     marginLeft: 0
//   },
//   desktop:{
//     marginLeft: 250
//   }
// }))

function App() {
  let marginLeft;
  if (window.innerWidth <= 700) marginLeft = "0px";
  else marginLeft = "250px";
  return (
    <div>
      {/* <Enroll/> */}
      {/* <MeetTable/> */}
      {/* <Dashboard/> */}
      {/* <TextEditor/> */}
      {/* <Table/> */}
      {/* <AddCourse /> */}
      {/* <Copyright/> */}
      {/* <AddNewLearningSkills /> */}
      <Router>
        <SideBar />
        <div style={{ marginLeft: 250, marginTop: 100 }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Enroll" component={Enroll} />
            <Route exact path="/MeetLink" component={MeetTable} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Classroom" component={OneToOne} />
            <Route exact path="/Students" component={OneToOne} />
            <Route exact path="/Attendances" component={OneToOne} />
            <Route exact path="/Teachers" component={Courses} />
            <Route exact path="/add-meet" component={AddMeet} />
            <Route exact path="/add-student" component={AddStudent} />
            <Route exact path="/add-teacher" component={AddTeacher} />
            <Route exact path="/add-course" component={AddCourse} />
            <Route exact path="/classroom/create" component={AddNewClassroom} />
            <Route exact path="/AddNewRoom" component={AddNewRoom} />
            <Route exact path="/TeacherDetails" component={TeacherDetails} />
            <Route exact path="/add-crm" component={AddCRM} />

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
            <Route
              exact
              path="/ManageStudentCourse"
              component={ManageStudentCourse}
            />
          </Switch>
        </div>
        <div style={{ marginLeft: 250, marginTop: 100 }}>
          <Copyright />
        </div>
      </Router>
    </div>
  );
}

export default App;
