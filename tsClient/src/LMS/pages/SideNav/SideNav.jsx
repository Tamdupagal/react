import React, { useContext, useEffect } from 'react'
import { TEACHER_SIDENAV, STUDENT_SIDENAV} from '../../helpers/sideNavData'
import { Link } from 'react-router-dom'
import student from '../../../assets/student.svg'
import { AppContext } from '../../../AppContext';
import { toast } from 'react-toastify';
import './SideNav.scss';
import { getTeacherDetail } from '../../../action/actions';


function SideNav({path}) {
    const { dispatch, toggle, state: { teacher : {data}, auth: { token, id, role } } } = useContext(AppContext)
    
    useEffect(() => {
        if (role === "TEACHER") {
            getTeacherDetail(dispatch, id(token), toast)
        }
    }, [])

    const SideNavigation = () => {
        switch (path) {
            case '/teacher':
                return (TEACHER_SIDENAV(path).map((item, index) => index === 0 ? 
                                    <li key={index}>
                                        <span className="link">
                                            <img src={student} alt="item" />
                            <span className="list_text">{data?.name}</span>
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
                                            <span className="list_text">Demo student</span>
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
            default:
                return

        }
    }
    return (
        <div className={`wrapper${toggle ? ' active' : ''}`}>
        <div className="sidenav">
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
