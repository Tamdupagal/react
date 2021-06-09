import React from 'react'
import Box from '../Box/Box'
import {Link} from 'react-router-dom' 
import './Course.scss'

function Course() {
    return (
        <div className="grid__layout">
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/xG8wtwBk2GIXZOaJiQleZ5j2gotng426QqXAnJE8.png'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
                <Link to="/course" className="course__btnLink">View More {">>"}</Link>
            </Box>
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/gzAWXg0FcsWZjS228kXNRUp8wAwWilwEUNUtoxwC.jpg'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
            </Box>
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/x3lNV1IDzEB4LnIfrK62M8abAEYT1muTw18rdJuq.jpg'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
            </Box>
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/xG8wtwBk2GIXZOaJiQleZ5j2gotng426QqXAnJE8.png'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
            </Box>
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/xG8wtwBk2GIXZOaJiQleZ5j2gotng426QqXAnJE8.png'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
            </Box>
            <Box cls='course__section'>
                <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/xG8wtwBk2GIXZOaJiQleZ5j2gotng426QqXAnJE8.png'} alt="bg" />
                <h1 className="course__title">
                    Demo Course
                </h1>
            </Box>
        </div>
    )
}

export default Course
