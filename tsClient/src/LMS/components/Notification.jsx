import React from 'react'
import './Notification.scss'

function Notification({children}) {
    return (
        <h1 className="notification">{children}</h1>
    )
}

export default Notification
