import React from 'react'
import './Checkbox.scss'

function Checkbox({children}) {
    return (
        <div className='checkbox__cont'>
            <input type="checkbox" />
            {children}
        </div>
    )
}

export default Checkbox
