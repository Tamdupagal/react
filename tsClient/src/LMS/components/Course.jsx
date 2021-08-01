import React, { useContext, useEffect } from 'react'
import Box from './Box'
import {useHistory, useRouteMatch} from 'react-router-dom' 
import { AppContext } from '../../AppContext'
import { COURSE_DETAIL_REQUEST, GET_ALL_COURSES_REQUEST } from '../../action/actionType'
import { toast } from 'react-toastify'
import { getallCourses, getCourseDetail, getCourseSections, getQuizQuestion, quizSubmission, quizSubmissionofCourse } from '../../action/actions'
import Loader from './Loader'
import Button from './Button'
import { FaLightbulb } from 'react-icons/fa'
import Quiz from './Quiz'
import './Course.scss'

function Course() {
    const { path } = useRouteMatch()

    const { setQuizOpen, dispatch, state: { course }, setCourseId} = useContext(AppContext)
    
    const history = useHistory()
    

    const showSection = (id) => {
        setCourseId(id)
        setQuizOpen(true)
        getCourseSections(dispatch, id, toast)
        quizSubmissionofCourse(dispatch, id, toast)
    }

    
    useEffect(() => {
        dispatch({ type: GET_ALL_COURSES_REQUEST })
        getallCourses(dispatch, toast)
    }, [])

    
    return (
        <div className="grid__layout">
            {course.data?.map((item, index) => {
                return (
                    <Box key={index} cls='course__section'>
                        <img src={'https://digitalaidedschool.s3.ap-south-1.amazonaws.com/course_images/xG8wtwBk2GIXZOaJiQleZ5j2gotng426QqXAnJE8.png'} alt="bg" />
                        <h1 className="course__title">
                            {item.title}
                        </h1>
                        {/* <Button onClick={()=>handleQuiz(item._id)} Icon={FaLightbulb}>View Course</Button> */}
                        <Button onClick={()=>showSection(item._id)} Icon={FaLightbulb}>View Section</Button>
                    </Box>
                )
            })}
            {course.isLoading && <Loader />}
            <Quiz/>
        </div>
    )
}

export default Course
