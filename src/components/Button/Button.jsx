import React from 'react'
import './Button.scss'

function Button({children, img, style}) {
    return (
        <button className="button" style={style}>
            {children && <span>{children}</span>}
                <img src={img || null} alt="button" />
        </button>
    )
}

export default Button
