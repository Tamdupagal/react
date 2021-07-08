import React from 'react'
import ReactLoading from 'react-loading';
import ReactDOM from 'react-dom';
import './Loader.scss';

function Loader({ type = "bars", options = { height: 60, width: 60, color:"white" } }) {
    
    return ReactDOM.createPortal(
        <div className="loader__wrapper">
            <ReactLoading type={type} {...options} />
        </div>
   , document.getElementById("loader") )
}

export default Loader
