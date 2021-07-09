import React, { } from 'react';
// import { AppContext } from '../../AppContext1';
import './TableHeader.scss';

function TableHeader({ headerText, Icon, cls, children }) {
    return (
        <div>
            <div className='header__box'>
                <Icon className="tableHeader__icon"/>
                <span>{headerText}</span>
            </div>
            {children}
        </div>
    )
}

export default TableHeader
