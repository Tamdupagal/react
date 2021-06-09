import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import './Box.scss'


function Box({ children, cls }) {
    const { theme } = useContext(AppContext)
    return (
        <section className={`section ${cls}${theme ? " dark" : ""}`}>
            {children}
        </section>
    )
}

export default Box
