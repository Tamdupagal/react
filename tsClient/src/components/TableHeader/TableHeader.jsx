import React from 'react';
import './TableHeader.scss';

function TableHeader({ headerText, headerImg, invertImg}) {
    return (
        <div className="container">
            {headerImg && (invertImg?
                <img className="invert" src={headerImg || null} alt="logo" /> :
                <img src={headerImg || null} alt="logo" />
            )
            }
            <span>{headerText}</span>
        </div>
    )
}

export default TableHeader
