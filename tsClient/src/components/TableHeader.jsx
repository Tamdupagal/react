import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import './TableHeader.scss';

function TableHeader({ headerText, headerImg, invertImg, cls, children }) {
    const {theme} = useContext(AppContext)
    return (
        <div className={`container ${cls}${theme ? ' dark' : ''}`}>
            <div className='header__box'>
            {headerImg && (invertImg?
                <img className="invert" src={headerImg || null} alt="logo" /> :
                <img src={headerImg || null} alt="logo" />
            )
            }
                <span>{headerText}</span>
            </div>
            {children}
        </div>
    )
}

export default TableHeader
