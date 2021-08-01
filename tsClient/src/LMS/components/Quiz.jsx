import React, { useContext, useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import {QUIZ_QUESTION} from '../helpers/Questions'
import { FaRegHandPointLeft, FaRegHandPointRight, FaTimes, FaTrashAlt, FaEdit, FaCheckDouble} from 'react-icons/fa'
import Button from './Button'
import Modal from 'react-modal';
import TableHeader from './TableHeader';
import { CgAddR} from 'react-icons/cg'
import { RiLightbulbFlashFill } from 'react-icons/ri'
import AddQuiz from  './AddQuiz'
import Box from './Box'
import { AppContext } from '../../AppContext';
import ReactLoading from 'react-loading';
import { deleteQuiz, deleteQuizQuestion, quizSubmit as submitQuiz} from '../../action/actions';
import { toast } from 'react-toastify';
import { useRouteMatch } from 'react-router-dom';
import Notification from '../components/Notification'
import './Quiz.scss'


Modal.setAppElement('#root');

function Quiz() {
    
    const [addQuizModal, setAddQuizModal] = useState({})

    const [ans, setAns] = useState({})

    const { dispatch, setQuizOpen, state: {quizSubmit,  section, auth : {role, token, id: authId}}, courseId, quizOpen } = useContext(AppContext)
    
    const sliderRef = useRef({})

     const settings = {
         dots: true,
         infinite: true,
         speed: 600,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dotsClass: "quiz__carousel__dot",
         //  fade: true,
         easing: "ease-out"
    };

    const handleAddQuizModal = (id) => {
        setAddQuizModal({[id] : { isOpen: true, for: 'quiz' }})
    }

    const handleDeleteQuestion = (no, id) => {
        deleteQuizQuestion(dispatch, id, no, toast, courseId)
    }

    const handleUpdateQuestion = (no, id, time) => {
        // timeRef.current[id] = {...timeRef.current[id], updatedAt : new Date(time).getTime() }
        setAddQuizModal({ [id]: { isOpen: true, for: 'updating', no, id } })
    }

    const handleAddQuestion = (id, time) => {
        // timeRef.current[id] = {...timeRef.current[id], updatedAt : new Date(time).getTime() }
        setAddQuizModal({ [id]: { isOpen: true, for: 'question' } })
    }

    const handleDeleteQuiz = (id) => {
        deleteQuiz(dispatch, id, toast, courseId)
    }

    const submitAnswer = (id) => {
        const quiz_response = Object.values(ans[id])
        const isIncomplete = !quiz_response.filter(res => !res.submitted_answer.length).length ? false : true;
        if (isIncomplete) {
            toast.warn(<Notification>Make sure that youn have answered all questions!</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                    }
            })
            return
        }
        const submitData = {
            user_id: authId(token),
            user_role: role,
            quiz_response,
            course_id : courseId
        }
        submitQuiz(dispatch, id, submitData, toast)
    }

    const handleMcq = (e, id, quesNo, question) => {
        e.target.checked = true;
        const ansValue = e.target.getAttribute('data-ans')
        setAns(prev=> ({...prev ,  [id]: { ...prev[id], [quesNo]: { question, submitted_answer: ansValue } } }))
    }

    const handleTextField = (e, id, quesNo, question) => {
        setAns(prev=> ({...prev, [id] : {...prev[id], [quesNo]: { question, submitted_answer: e.target.value } }}))
    }

    const isUpdated = (data, item) => {
        if (role === 'STUDENT' && data.hasOwnProperty(item._id)){
            return (new Date(item.updatedAt).getTime() - new Date(data[item._id]).getTime() > 0 ? true : false)
        }
        return true
    }


    return (
            <Modal
                isOpen={quizOpen}
                contentLabel="Example Modal"
                overlayClassName={{base : 'overlay', afterOpen : 'overlay_after_open', beforeClose : 'overlay_before_close'}}
                className={{base : 'content', afterOpen : 'content_after_open', beforeClose : 'content_before_close'}}
                closeTimeoutMS={300}
        >
            <Box cls="quiz__container">
                <TableHeader Icon={RiLightbulbFlashFill} headerText='Course Material'>
                    <Button onClick={()=>setQuizOpen(false)}  style={{backgroundColor : '#db504a'} } Icon={FaTimes}/>
                </TableHeader>
            {section.isLoading ?
                    <div className="quiz__loader">
                        <ReactLoading type="spin" color="green" height={40} width={40}/> 
                    </div>
                    :
                    section?.data?.map((item, index) => {
                        return (
                            <div className="section__box" key={index}>
                                <div className="section__config">
                                    <h1 className="topic">Topic #{index + 1} : {item.name}</h1>
                                    {role ==='TEACHER' && <div className="quiz__edit">
                                        {!item?.quiz?.length ? <Button onClick={() => handleAddQuizModal(item._id)} style={{ marginRight: '1rem', backgroundColor: '#28a745' }} Icon={CgAddR}>Create Quiz</Button> :
                                            <>
                                                <Button onClick={() => handleAddQuestion(item._id, item.updatedAt)} style={{ marginRight: '1rem', backgroundColor: '#28a745' }} Icon={CgAddR}>Add Question</Button>
                                                <Button onClick={() => handleDeleteQuiz(item._id)} style={{ marginRight: '1rem', backgroundColor: "#db504a" }} Icon={FaTrashAlt}>Delete quiz</Button>
                                            </>}
                                    </div>}
                                </div>
                                <div className="section__description">{item.description}</div>
                                {!item?.quiz?.length ?
                                    <p className="warning">Sorry, no quiz data available!</p> :
                                    isUpdated(quizSubmit.data, item) &&
                                    <>
                                        <Slider {...settings} ref={(r) => {
                                            sliderRef.current[item._id] = r
                                        }} className="quiz__slider">
                                            {QUIZ_QUESTION(item.quiz)?.map((ques, quesIndex) => {
                                                return (
                                                    <div key={quesIndex} className="quiz__box">
                                                        <p className="quiz__question">No {ques.no} :- {ques.questionText}</p>
                                                        <div className="quiz__answer">
                                                            {ques.type.replace(/\s/g, "").toLowerCase() === 'multiplechoice' ?
                                                                ques.options.map((opt, ansIndex) => {
                                                                    return (
                                                                        <div key={ansIndex} className="quiz__ans__box">
                                                                            <input onChange={(e)=>handleMcq(e, item._id,ques.no, ques.questionText)} type="radio" name="quiz__ans" data-ans={opt}/>
                                                                            <p className="quiz__ans" >{opt}</p>
                                                                        </div>
                                                                    )
                                                                }) :
                                                                <>
                                                                    <span>Your answer :</span>
                                                                    <textarea value={ans[item._id]?.[ques.no]?.submitted_answer} onChange={(e)=>handleTextField(e,item._id, ques.no, ques.questionText)} className="text__ans" />
                                                                </>
                                                            }
                                                        </div>
                                                        {role === 'TEACHER' ? <div className="question_config_btn">
                                                            <Button onClick={() => handleDeleteQuestion(ques.no, item._id)} Icon={FaTrashAlt} style={{ backgroundColor: '#db504a', marginRight: '0.8rem' }}>Delete question</Button>
                                                            <Button onClick={() => handleUpdateQuestion(ques.no, item._id, item.updatedAt)} Icon={FaEdit}>Update question</Button>
                                                        </div> : quesIndex === QUIZ_QUESTION(item.quiz).length -1 && <Button onClick={() => submitAnswer(item._id)} Icon={FaCheckDouble}>Submit</Button>}
                                                    </div>
                                                )

                                            })}
                                        </Slider>
                                        <div className="quiz__btn">
                                            <FaRegHandPointLeft className="quiz__icon" onClick={() => sliderRef.current[item._id].slickPrev()} />
                                            <FaRegHandPointRight className="quiz__icon" onClick={() => sliderRef.current[item._id].slickNext()} />
                                        </div>
                                    </>
                                }
                                <AddQuiz id={item._id} addQuizModal={addQuizModal} setAddQuizModal={setAddQuizModal} />
                            </div>)
                    }
                )}
                </Box>
        </Modal>
    )
}

export default Quiz
