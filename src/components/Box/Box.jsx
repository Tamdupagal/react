import React from 'react'
import './Box.scss'

function Box({children, style}) {
    return (
        <section className="section" style={style}>
            {children}
        </section>
    )
}

export default Box
