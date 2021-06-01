import React, { useContext} from 'react'
import './Header.scss'
import logout from '../../images/logout.svg'
import menu from '../../images/menu.svg'
import live from '../../images/live.svg'
import course from '../../images/course.svg'
import rating from '../../images/rating.svg'
import explore from '../../images/explore.svg'
import {context} from '../../store/Context'



function Header() {
    const { setToggle } = useContext(context);
    const { setToggleForm } = useContext(context);

    return (
        <header className="header">
            <div className="header__toggle">
                <img className="menu__img" onClick={()=>setToggle(prev => !prev)} src={menu} alt="menu" />
                <img src={logout} alt="logout" />
            </div>
            <div className="header__navigation">
                <ul>
                    <li><img src={live} alt="live" /> <span>Live classes</span></li>
                    <li><img src={course} alt="course" /> <span>Course</span></li>
                    <li><img src={explore} alt="explore" /> <span>Explore New Learning</span></li>
                    <li onClick={()=>setToggleForm(prev=> !prev)}><img src={rating} alt="Feedback" /> <span>Feedback</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
