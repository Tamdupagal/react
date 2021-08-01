import React from 'react'
import ReactLoading from 'react-loading';
import ReactDOM from 'react-dom';
import './Loader.scss';

function Loader({ type = "spin", options = { height: 45, width: 45, color:"blue" } }) {
    
    return ReactDOM.createPortal(
        <div className="loader__wrapper">
            <ReactLoading type={type} {...options} />
        </div>
   , document.getElementById("loader") )
}

export default Loader
