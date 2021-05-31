import React from 'react'
import './Box.scss'

function Box({children, style, cls}) {
    return (
        <section className={`section ${cls}`} style={style}>
            {children}
        </section>
    )
}

export default Box
