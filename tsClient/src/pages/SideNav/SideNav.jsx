import React, { useContext } from 'react'
import './SideNav.scss';
import { sideNavData } from '../../helpers/sideNavData'
import { Link } from 'react-router-dom'
import { context } from '../../store/Context'
import student from '../../assets/student.svg'


function SideNav() {
    const { toggle, theme} = useContext(context)
    return (
        <div className={`wrapper${toggle ? ' active' : ''}`}>
        <div className={`sidenav${theme ? ' dark' : ''}`}>
            <div className="sidenav__logo__box">
                <img src={"https://lms.digitalaidedschool.com/student-assets/img/Das_White.png"} alt="logo" />
            </div>
            <nav>
                <ul>
                        {sideNavData.map((item, index) => index == 0 ? 
                                    <li key={index}>
                                        <span className="link">
                                            <img src={student} alt="item" />
                                            <span className="list_text">Utkarsh Agrawal</span>
                                        </span>
                                    </li>
                                    :
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
        </div>
    )
}

export default SideNav
