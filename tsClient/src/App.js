// import SideNav from './components/SideNav/SideNav'
import { BrowserRouter as Router} from 'react-router-dom'
import Form from './components/Form'
import React, { useContext, useEffect, useState } from 'react'
import DashBoard from './pages/Dashboard/Dashboard'
import Attendance from './pages/Attendance/Attendance'
import Assigment from './pages/Assignment/Assignment'
import Activities from './pages/Activities/Activities'
import Note from './pages/Notes/Note'
import Scheduler from './pages/Scheduler/Scheduler'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import CreateAs from './components/CreateAs'
import Bag from './pages/Bag/Bag'
import SideNav from './pages/SideNav/SideNav'
import Header from './components/Header'
import Content from './components/Content'
import Quiz from './pages/Quiz/Quiz'
import { AppContext } from './AppContext'
import axios from './axios'
import {mobileView} from './action/actions'


function App() {

  const {toggle, theme, dispatch,} = useContext(AppContext)
  const [screenWidth,setScreenWidth]= useState(window.innerWidth);

    
    useEffect(async() => {
         try {
            const res = await axios.get('api/course/all');
            console.log("response------>", res);
        } catch (err) {
            console.log(err);
        }
    }, [])
    useEffect(async()=>{
        console.log(screenWidth);
        if(window.innerWidth>560)
        dispatch(mobileView(false));
        else
        dispatch(mobileView(true));
        console.log(screenWidth);
  },[screenWidth]);
  window.addEventListener("resize", ()=>setScreenWidth(window.innerWidth));
  
    
  return (
    <Router>
        <div className="App">
          <SideNav />
          <div className={`main__container${toggle ? ' active' : ''}${theme ? ' dark' : ''}`}>
            <Header/>
            <Switch>
                <Route path="/dashboard" exact >
                    <DashBoard />
                </Route>
                <Route path="/attendance" exact >
                    <Attendance/>
                </Route>
                <Route path="/assignment" exact >
                    <Assigment/>
                </Route>
                <Route path="/activities" exact >
                   <Activities />
                </Route>
                <Route path="/note" exact >
                    <Note />
                </Route>
                <Route path="/scheduler" exact >
                    <Scheduler />
                </Route>
                <Route path="/assignment/create">
                    <CreateAs/>
                </Route>
                <Route path="/bag" exact>
                    <Bag/>
                </Route>
                <Route path="/course" exact>
                    <Content/>
                </Route>
                </Switch>
                </div>
                <Route path="/quiz" exact >
                      <Quiz/>
              </Route>
          <Form/>
      </div>
    </Router>
  );
}

export default App;
