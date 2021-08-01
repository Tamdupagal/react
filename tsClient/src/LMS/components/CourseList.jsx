import React, { useContext, useEffect } from 'react';
import { FaCalendarCheck, FaCheck, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import {getQuizQuestion } from '../../action/actions';
import {GET_QUIZ_REQUEST } from '../../action/actionType';
import { AppContext } from '../../AppContext';
import Box from './Box';
import TableHeader from './TableHeader';
import Button from './Button';
import ReactLoading from 'react-loading';
import Notification from './Notification';
import './CourseList.scss';

toast.configure()

function CourseList() {

    const { dispatch, state: {course }, sectionModal, setSectionModal, courseId, setCourseId} = useContext(AppContext)
    
    const handleCourseModal = () => {
        if (!courseId) {
            toast.warn(<Notification>Please, select a section!</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                }
            })
            return
        }
        setCourseModal(false);
        if(!courseId) return;
        dispatch({type : GET_QUIZ_REQUEST})
        getQuizQuestion(dispatch, courseId, toast)
    }

    const handleCorrectOption = (e) => {
        setCourseId(e.target.getAttribute('data-option'))
    }
    

    return (
                    <Modal
                        isOpen={sectionModal}
                        contentLabel="Example Modal"
                        overlayClassName={{base : 'overlay', afterOpen : 'overlay_after_open', beforeClose : 'overlay_before_close'}}
                        className={{base : 'content', afterOpen : 'content_after_open', beforeClose : 'content_before_close'}}
                        closeTimeoutMS={300}
                    >
                     <Box>
                <TableHeader headerText="Choose a section :" Icon={FaCalendarCheck} >
                    <Button onClick={()=>setSectionModal(false)} Icon={FaTimes} style={{backgroundColor: "#db504a"}}/>
                </TableHeader>
                {course.isLoading ?
                    <div className="loader_course">
                        <ReactLoading type="spin" color="green" height={40} width={40} />
                    </div>
                    :
        
                    <div className="course__list__box">
                        {course.courses?.map((course, index) => {
                            return (
                                <div className="option_box" key={index}>
                                    {courseId === course._id ?
                                        <input onClick={handleCorrectOption} data-option={courseId} type="radio" name="option" id={`option_${index}`} defaultChecked />
                                        :
                                        <input onClick={handleCorrectOption} data-option={course._id} type="radio" name="option" id={`option_${index}`} />}
                                    <label htmlFor={`option_${index}`} className="option" id={`option_${index}`}>{course.title}</label>
                                </div>
                            )
                        })}
                        <Button style={{alignSelf: 'flex-end'}} onClick={handleCourseModal} Icon={FaCheck}>Done</Button>
                    </div>}
                    </Box>
            </Modal>
    )
}

export default CourseList
