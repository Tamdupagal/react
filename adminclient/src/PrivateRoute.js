import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './App'
import { AppContext } from './AppContext'

export default function PrivateRoute(props) {
    const { state: {loginToken}} = useContext(AppContext)
    console.log(loginToken)
    return (
        <>
            {isLoggedIn()?
            <Route {...props}>
                {props.children}
            </Route > 
            : 
            <Redirect to="/login"/>}
        </>
    )
}
