import React, { useContext } from 'react'
import { TEACHER_SIDENAV, STUDENT_SIDENAV} from '../../helpers/sideNavData'
import { Link } from 'react-router-dom'
import student from '../../assets/student.svg'
import { AppContext } from '../../AppContext';
import './SideNav.scss';


function SideNav({path}) {
    const { toggle, theme } = useContext(AppContext)
    const SideNavigation = () => {
        switch (path) {
            case '/teacher':
                return (TEACHER_SIDENAV(path).map((item, index) => index === 0 ? 
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
                )
            case '/student':
                return (STUDENT_SIDENAV(path).map((item, index) => index === 0 ? 
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
                )

        }
    }
    return (
        <div className={`wrapper${toggle ? ' active' : ''}`}>
        <div className={`sidenav${theme ? ' dark' : ''}`}>
            <div className="sidenav__logo__box">
                <img src={"https://lms.digitalaidedschool.com/student-assets/img/Das_White.png"} alt="logo" />
            </div>
            <nav>
                <ul>
                    {SideNavigation()}
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default SideNav
