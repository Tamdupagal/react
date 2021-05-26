import React, { useContext } from 'react'
import './SideNav.scss';
import { sideNavData } from './sideNavData'
import { Link } from 'react-router-dom'
import {userContext} from '../../App'

function SideNav() {
    const {toggle} = useContext(userContext)
    return (
        <div className={`sidenav ${toggle && 'toggle'}`}>
            <div className="sidenav__logo__box">
                <img src={"https://lms.digitalaidedschool.com/student-assets/img/Das_White.png"} alt="logo" />
            </div>
            <nav>
                <ul>
                    {sideNavData.map((item, index) =>
                    {
                        return (
                            <li key={index}>
                                <Link to={item.route} className="link">
                                    <img src={item.ListImage} alt="item" />
                                    <span className="list_text">{item.ListItem}</span>
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default SideNav
