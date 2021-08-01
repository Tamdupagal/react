import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './TableHeader.scss';

function TableHeader({ headerText, Icon, cls, children }) {
    const {theme} = useContext(AppContext)
    return (
        <div className={`container ${cls}${theme ? ' dark' : ''}`}>
            <div className='header__box'>
                <Icon className="tableHeader__icon"/>
                <span>{headerText}</span>
            </div>
            {children}
        </div>
    )
}

export default TableHeader
