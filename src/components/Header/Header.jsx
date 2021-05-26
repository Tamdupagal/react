import React, { useContext } from 'react'
import './Header.scss'
import logout from '../../images/logout.svg'
import menu from '../../images/menu.svg'
import live from '../../images/live.svg'
import course from '../../images/course.svg'
import rating from '../../images/rating.svg'
import explore from '../../images/explore.svg'
import {userContext} from '../../App'


function Header() {
    const {setToggle} = useContext(userContext)

    return (
        <header className="header">
            <div className="header__toggle">
                <img onClick={()=>setToggle(prev => !prev)} src={menu} alt="menu" />
                <img src={logout} alt="logout" />
            </div>
            <div className="header__navigation">
                <ul>
                    <li><img src={live} alt="live" /> <span>Live classes</span></li>
                    <li><img src={course} alt="course" /> <span>Course</span></li>
                    <li><img src={explore} alt="explore" /> <span>Explore New Learning</span></li>
                    <li><img src={rating} alt="Feedback" /> <span>Feedback</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
