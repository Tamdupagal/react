import React, { useContext } from 'react'
import './Main.scss'
import Header from '../Header/Header'
import DashBoard from '../Dashboard/Dashboard'
import Attendance from '../Attendance/Attendance'
import Assigment from '../Assignment/Assignment'
import Activities from '../Activities/Activities'
import Note from '../Notes/Note'
import Scheduler from '../Scheduler/Scheduler'
import { Route, Switch } from 'react-router-dom'
import CreateAs from '../Assignment/CreateAs'
import Bag from '../Bag/Bag'
import { context } from '../../store/Context' 
import Content from '../CourseItem/Content'

function Main() {
    const {toggle} = useContext(context)
    return (
        <div className={`main__container${toggle ? ' active' : ''}`}>
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
    )
}

export default Main
