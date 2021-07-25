import React, { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { AppContext } from './AppContext'
import {isLogin} from "./App"

export default function PartialPrivateRoute({component: Component,restricted, ...props}) {
    // const location = useLocation()
    return (
        <>
          
            { restricted === false ?
            <Route {...props}>
                {props.children}
            </Route > 
            : 
            <Redirect to="/login"/>}
        </>
    )
}
