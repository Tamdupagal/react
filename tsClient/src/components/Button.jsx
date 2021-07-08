import React from 'react'
import './Button.scss'

function Button({ children,style, onClick, cls, Icon}) {
    return (
        <button className={`button ${cls}`} style={style} onClick={onClick}>
            {children ? <Icon className="btn__icon" /> : <Icon className="btn__icon" style={{marginRight: 0}} />}
            {children}
        </button>
    )
}

export default Button
