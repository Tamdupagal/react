import Form from './components/Form'
import React, { useContext, useEffect } from 'react'
import DashBoard from './pages/Dashboard/Dashboard'
import Attendance from './pages/Attendance/Attendance'
import Assigment from './pages/Assignment/Assignment'
import Activities from './pages/Activities/Activities'
import Note from './pages/Notes/Note'
import Scheduler from './pages/Scheduler/Scheduler'
import { Route, Switch,Redirect, useHistory} from 'react-router-dom'
import Bag from './pages/Bag/Bag'
import SideNav from './pages/SideNav/SideNav'
import Header from './components/Header'
import Quiz from './pages/Quiz/Quiz'
import CreateAs from './components/CreateAs'
import Login from './pages/Login/Login'
import { AppContext } from './AppContext'
import ProtectedRoute from './helpers/ProtectedRoute'
import Courses from './pages/Courses/Courses'
import LiveClass from './pages/LiveClass/LiveClass'
import Library from './pages/Library/Library'
import './App.scss';


function App() {

    const { toggle, theme, state: { auth } } = useContext(AppContext)
    const history = useHistory()

    useEffect(() => {
        if (!auth.token) {
            history.push('/login')
        }
    }, [auth.token])

    useEffect(() => {
        if (history.pathname === '/') {
            history.push('/login')
        }
    }, [])
    
  return (
      <>
          <Switch>
              <Route path="/login" exact>
                <Login />
              </Route>
              <ProtectedRoute path="/teacher" children={({ location }) => {
                  return (
                  <div className="content_container">
                    <SideNav path='/teacher'/>
                    <div className={`main__container${toggle ? ' active' : ''}${theme ? ' dark' : ''}`}>
                        <Redirect to="/teacher/dashboard"/>
                        <Header/>
                        <Switch>
                            <ProtectedRoute path={`/teacher/dashboard`} exact >
                                <DashBoard />                                      
                            </ProtectedRoute>
                            <ProtectedRoute path={`/teacher/attendance`} exact >
                                <Attendance/>
                            </ProtectedRoute>
                            <ProtectedRoute path={`/teacher/assignment`} exact > 
                                <Assigment/>
                            </ProtectedRoute>
                            <ProtectedRoute path={`/teacher/activities`} exact >
                                <Activities />
                            </ProtectedRoute>
                            <ProtectedRoute path={`/teacher/note`} exact >
                                <Note />
                            </ProtectedRoute>
                            <ProtectedRoute path={`/teacher/scheduler`} exact >
                                <Scheduler />
                            </ProtectedRoute>
                            <ProtectedRoute path='/teacher/assignment/create' exact>
                                <CreateAs/>
                            </ProtectedRoute>
                        </Switch>
                        </div>
                        <ProtectedRoute path="/teacher/quiz" exact >
                            <Quiz/>
                        </ProtectedRoute>
                        <Form/>
                </div>)
                }}>
                </ProtectedRoute>                                       
              <ProtectedRoute path="/student" children={({ location }) => {
                  return (
                  <div className="content_container">
                    <SideNav path='/student'/>
                    <div className={`main__container${toggle ? ' active' : ''}${theme ? ' dark' : ''}`}>
                        <Redirect to="/student/bag"/>
                        <Header/>
                        <Switch>
                            <ProtectedRoute path={`/student/bag`} exact >
                                <Bag/>                                      
                            </ProtectedRoute>
                            <ProtectedRoute path={`/student/courses`} exact >
                                <Courses/>
                            </ProtectedRoute>
                            <ProtectedRoute path={`/student/live-class`} exact > 
                                <LiveClass/>
                            </ProtectedRoute>
                            <ProtectedRoute path={`/student/library`} exact >
                                <Library />
                            </ProtectedRoute>
                            <ProtectedRoute path={`/student/certificate`} exact >
                                <Bag/>   
                            </ProtectedRoute>
                        </Switch>
                        </div>
                        {/* <ProtectedRoute path="student/quiz" exact >
                            <Quiz/>
                        </ProtectedRoute> */}
                        <Form/>
                </div>)
                }}>
                </ProtectedRoute>                                       
                </Switch>
                </>
                );
            }
            
            export default App;
            