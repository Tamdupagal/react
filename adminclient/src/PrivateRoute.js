import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from './AppContext'

export default function PrivateRoute(props) {
    const { state: {loginToken}} = useContext(AppContext)
    console.log(loginToken)
    return (
        <>
            {loginToken.token.data?
            <Route {...props}>
                {props.children}
            </Route > 
            : 
            <Redirect to="/login"/>}
        </>
    )
}
