import React, { useContext, useState} from 'react'
import './Header.scss'
import logout from '../assets/logout.svg'
import live from '../assets/live.svg'
import course from '../assets/course.svg'
import rating from '../assets/rating.svg'
import explore from '../assets/explore.svg'
import { CgMenuGridO } from 'react-icons/cg'
import { logout as logOut} from '../action/actions'
import { AppContext } from '../AppContext'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'


toast.configure()

function Header() {
    const { setToggle, setToggleForm, dispatch} = useContext(AppContext);
    const history = useHistory()
    
    const handleLogout = (e) => {
        sessionStorage.removeItem('key')
        sessionStorage.removeItem('role')
        logOut(dispatch,toast)
    }

    return (
        <header className="header">
            <div className="header__toggle">
                <CgMenuGridO className="menu" onClick={() => setToggle(prev => !prev)} />
                <div className="menu__box">
                    <img  className="logout" src={logout} onClick={handleLogout} alt="logout" />
                </div>
            </div>
            <div className="header__navigation">
                <ul>
                    <li><img src={live} alt="live" /> <span>Live classes</span></li>
                    <li onClick={()=>history.push('/teacher/course')}><img src={course} alt="course" /> <span>Course</span></li>
                    <li><img src={explore} alt="explore" /> <span>Explore New Learning</span></li>
                    <li onClick={()=>setToggleForm(prev=> !prev)}><img src={rating} alt="Feedback" /> <span>Feedback</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
