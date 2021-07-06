import { BrowserRouter as Router, Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Pages/Dashboard";
// import { Container } from "react-bootstrap";
import Enroll from "./Pages/Enroll";
import MeetLink from "./Pages/MeetLink";
import AddNewLearningSkills from "./Pages/AddNewLearningSkills";
import AddCourseActivity from "./Pages/AddCourseActivity";
import AddSpiritualLearning from "./Pages/AddSpiritualLearning";
import OneToOne from "./Pages/OneToOne";
import React, { useState, useEffect, useContext } from "react";
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
import Trainers from "./Pages/Trainers";
import AddTrainer from "./Pages/AddTrainer";
import LoginPage from "./Pages/LoginPage";
import Carousel1 from "./Components/Carousel/Carousel1";
import PrivateRoute from "./PrivateRoute";
import { AppContext } from "./AppContext";
import PartialPrivateRoute from "./PartialPrivateRoute";


// export const isLogin = () => {
//   // history.push({
//   //   pathname: "/admin",
//   //   state: {data: loginToken.token?.data.role }
//   // })
//   // console.log("used")
//   // if(loginToken.token.data.role=="ADMIN")
//   return true;
//   // else
//   // return false;
// }


export const isLoggedIn = () => {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("token")
  if(token && role)
  return true;
  else
  return false;
}

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
  const { state : {loginToken}} = useContext(AppContext)
  const history = useHistory()

  // useEffect(async()=>{
  //   console.log(screenWidth);
  //   if(window.innerWidth>560)
  //     dispatch(mobileView(false));
  //   else
  //     dispatch(mobileView(true));
  //   console.log(screenWidth);
  // },[screenWidth]);
  useEffect(() => {
    if (!loginToken.token) {
        history.push('/login')
    }
  
}, [loginToken.token])



  window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

  const classes = useStyles();
  
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Switch>
          <Route exact path="/login" component={LoginPage}/>

          <div className={classes.root}>
            {/* <PrivateRoute path="/" component={SideBar}/> */}
            {/* <SideBar path="/"/> */}
            <SideBar/>
            {/* <Redirect to="/dashboard"/> */}
            <Switch>

            <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path={`/enroll`} exact>
                <Enroll/>
              </PrivateRoute>
              <Route exact path="/meetLink" component={MeetLink} />
              <PrivateRoute exact path="/meetLink">
                <MeetLink/>
              </PrivateRoute>
              <PrivateRoute exact path="/courses" component={Courses} />
              <PrivateRoute exact path="/classroom" component={OneToOne}/>
              <PrivateRoute exact path="/students" component={Students} />
              <Route exact path="/student-courses" component={StudentCourses} />
              <Route exact path="/attendances" component={Attendance} />
              <Route exact path="/teachers" component={Teachers} />
              <Route exact path="/add-meet" component={MeetLink} />
              <Route exact path="/edit-meet/:id" component={MeetLink} />
              <Route exact path="/add-student" component={AddStudent} />
              <Route exact path="/add-teacher" component={AddTeacher} />
              {/* <Route exact path="/carousel" component={Carousel} /> */}
              <Route exact path="/trainers" component={Trainers} />
              <Route exact path="/add-trainer" component={AddTrainer} />
              <Route exact path="/trainer/edit/:id" component={AddTrainer} />
              <Route
                exact
                path="/add-course-section"
                component={AddCourseSections}
              />
              <Route exact path="/operations" component={Operations} />
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
                path="/student-courses/:id/manage"
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
                exact
                path="/edit-course-section"
                component={EditCourseSection}
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
          {/* </PrivateRoute> */}
          </Switch>
        </Router>
      </div>
      {/* <div>
      <LoginPage />
    </div> */}
    </ThemeProvider>
  );
}

export default App;
