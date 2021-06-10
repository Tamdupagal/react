import React from 'react'
import './Button.scss'

function Button({ children, img, style, onClick, cls }) {
    return (
        <button className={`button ${cls}`} style={style} onClick={onClick}>
            {children && <span className={img && 'addMargin'}>{children}</span>}
            {img && <img src={img || null} alt="button"/>}
        </button>
    )
}

export default Button
