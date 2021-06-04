import React, { useContext} from 'react'
import './Header.scss'
import logout from '../assets/logout.svg'
import live from '../assets/live.svg'
import course from '../assets/course.svg'
import rating from '../assets/rating.svg'
import explore from '../assets/explore.svg'
import { context } from '../store/Context'
import {RiMenuFoldLine, RiMenuUnfoldLine, } from 'react-icons/ri'



function Header() {
    const { setToggle,setToggleForm, setTheme, theme , toggle} = useContext(context);

    return (
        <header className={`header${theme ? ' dark' : ''}`}>
            <div className="header__toggle">
                { toggle ? 
                    <RiMenuFoldLine className="menu" onClick={() => setToggle(prev => !prev)} />
                    :
                    <RiMenuUnfoldLine className="menu" onClick={() => setToggle(prev => !prev)} />
                }
                <div className="menu__box">
                    <button type="button" onClick={() =>setTheme(prev=>!prev)}/>
                    <img src={logout} alt="logout" />
                </div>
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
