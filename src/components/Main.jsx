import React, { useEffect } from 'react'
import './Main.scss'
import Header from './Header/Header'
import DashBoard from './Dashboard/Dashboard'
import Attendance from './Attendance/Attendance'
import Assigment from './Assignment/Assignment'
import Activities from './Activities/Activities'
import Note from './Notes/Note'
import Scheduler from './Scheduler/Scheduler'
import { Redirect, Route, Switch } from 'react-router-dom'


function Main() {
    useEffect(()=>{
        <Redirect from="/" to="/dashboard"></Redirect>
    }, [])
    return (
        <div className="main__container">
            <Header/>
            <Switch>
                <Route path="/dashboard" exact >
                    <DashBoard />
                </Route>
                <Route path="/attendance" exact >
                   <Attendance />
                </Route>
                <Route path="/assignment" exact >
                    <Assigment />
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
            </Switch>
        </div>
    )
}

export default Main
