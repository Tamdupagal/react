import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";
import Enroll from "./Components/Enrollment/Enroll";
import MeetTable from "./Components/MeetLinks/MeetTable";
import AddNewLearningSkills from "./Components/TextEditor/AddNewLearningSkills";
import OneToOne from "./Components/Classrooms/OneToOne";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Courses from "./Components/Courses/Courses";
import AddMeet from "./Components/MeetLinks/AddMeet";
import AddStudent from "./Components/Students/AddStudent";
import AddTeacher from "./Components/Teacher/AddTeacher";
import { makeStyles } from "@material-ui/core";

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
      <Router>
        <SideBar />
        <div style={{ marginLeft: 250, marginTop: 100 }}>
          <Switch>
            <Route exact path="/Dashboard" component={Dashboard} />
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
