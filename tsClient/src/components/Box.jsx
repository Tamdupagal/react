import React, { useContext } from 'react'
import { context } from '../store/Context'
import './Box.scss'


function Box({ children, cls }) {
    const { theme } = useContext(context)
    return (
        <section className={`section ${cls}${theme ? " dark" : ""}`}>
            {children}
        </section>
    )
}

export default Box
