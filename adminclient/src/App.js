import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Pages/Dashboard";
// import { Container } from "react-bootstrap";
import Enroll from "./Pages/Enroll";
import MeetLink from "./Pages/MeetLink";
import AddNewLearningSkills from "./Pages/AddNewLearningSkills";
import AddCourseActivity from "./Pages/AddCourseActivity";
import AddSpiritualLearning from "./Pages/AddSpiritualLearning";
import OneToOne from "./Pages/OneToOne";
import React, { useState, useEffect } from "react";
import Courses from "./Pages/Courses";
import AddMeet from "./Pages/AddMeet";
import AddStudent from "./Pages/AddStudent";
import Students from "./Pages/Students";
import AddTeacher from "./Pages/AddTeacher";
import TeacherDetails from "./Pages/TeacherDetails";
import TeacherHistory from "./Pages/TeacherHistory";
import AddCourseSections from "./Pages/AddCourseSections";
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
import ViewClassroomHistory from "./Pages/ViewClassroomHistory";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Teachers from "./Pages/Teachers";
import Operations from "./Pages/Operations";
import TeacherTraining from "./Pages/TeacherTraining";
import EditClassroom from "./Pages/EditClassroom";
import EditTeacher from "./Pages/EditTeacher";
import EditCourseSection from "./Pages/EditCourseSection";
import ViewCourseSection from "./Pages/ViewCourseSection";
import CourseMaterial from "./Pages/CourseMaterial";
import AddNewMaterial from "./Pages/AddNewMaterial";
import EditAdmin from "./Pages/EditAdmin";
// import Carousel from "./Components/Carousel";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#218a21",
    },
    secondary: {
      main: "#1388e8",
    },
  },
});

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
  // const history = useHistory();
  // const { state, dispatch } = useContext(AppContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [editClassroomData, setEditClassroomData] = useState();

  // const handleEditClassroom = (data) => {
  //   setEditClassroomData(data);
  //   console.log("done");
  // };

  // useEffect(async()=>{
  //   console.log(screenWidth);
  //   if(window.innerWidth>560)
  //     dispatch(mobileView(false));
  //   else
  //     dispatch(mobileView(true));
  //   console.log(screenWidth);
  // },[screenWidth]);
  useEffect(async () => {
    // try {
    //   const res = await axios.get("/classroom/60c478414d3ad53a9e514693");
    //   console.log("response:", res);
    // } catch (err) {
    //   console.log(err);
    // }
  }, []);
  window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <SideBar />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/enroll" component={Enroll} />
              <Route exact path="/meetLink" component={MeetLink} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/classroom" component={OneToOne} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/student-courses" component={StudentCourses} />
              <Route exact path="/attendances" component={Attendance} />
              <Route exact path="/teachers" component={Teachers} />
              <Route exact path="/add-meet" component={AddMeet} />
              <Route exact path="/add-student" component={AddStudent} />
              <Route exact path="/add-teacher" component={AddTeacher} />
              {/* <Route exact path="/carousel" component={Carousel} /> */}
              <Route
                exact
                path="/add-course-section"
                component={AddCourseSections}
              />
              <Route exact path="/operations" component={Operations} />
              {/* <Route exact path="/student/:id/Edit" component={Student} /> */}

              <Route
                exact
                path="/classroom/create"
                component={AddNewClassroom}
              />
              <Route
                exact
                path="/classroom/edit/:id"
                component={EditClassroom}
              />
              <Route exact path="/new-room" component={AddNewRoom} />
              <Route
                exact
                path="/teacher/details/:id"
                component={TeacherDetails}
              />
              <Route exact path="/add-crm" component={AddCRM} />
              <Route exact path="/add-admin" component={AddAdmin} />
              <Route
                exact
                path="/teacher-timeline"
                component={TeacherHistory}
              />
              <Route exact path="/students-table" component={Students} />
              <Route path="/:cid/lectures" component={AddLecture} />
              <Route path="/:cid/add-lecture" component={AddNewLecture} />
              <Route exact path="/teacher/edit/:id" component={EditTeacher} />
              <Route
                exact
                path="/attendance/report"
                component={AddNewLecture}
              />
              <Route
                exact
                path="/classrooms/timeline"
                component={ViewClassroomHistory}
              />
              <Route
                exact
                path="/student-courses/manage"
                component={ManageStudentCourse}
              />
              <Route
                exact
                path="/learning-skills"
                component={AddNewLearningSkills}
              />
              <Route
                exact
                path="/course-activities"
                component={AddCourseActivity}
              />
              <Route
                exact
                path="/spiritual-learning"
                component={AddSpiritualLearning}
              />
              <Route
                exact
                path="/trainer-classrooms"
                component={TeacherTraining}
              />
              <Route
                path="/edit-course-section/:course_id/:section_id"
                exact render={(props) => props.location.state?<EditCourseSection courses={props.location.state.courses} course_section={props.location.state.course_section}  />:<EditCourseSection />}
              />
              <Route
                exact
                path="/view-course-section"
                component={ViewCourseSection}
              />
              <Route exact path="/course-material" component={CourseMaterial} />
              <Route exact path="/add-materail" component={AddNewMaterial} />
              <Route exact path="/edit-admin/:id" component={EditAdmin} />
              <Route
                exact
                path="/:cid/edit-lecture/:id"
                component={AddNewLecture}
              />
              <Route exact path="/student/edit/:id" component={AddStudent} />
            </Switch>
            <div>
              <Copyright />
            </div>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
