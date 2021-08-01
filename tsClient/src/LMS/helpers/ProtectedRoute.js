import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AppContext } from '../../AppContext'


export default function ProtectedRoute(props) {
    const { state : {auth} } = useContext(AppContext)

    return (
        <>
            {auth.token ?
            <Route {...props}>
                {props.children}
            </Route > : <Redirect to="/"/>}
        </>
    )
}
