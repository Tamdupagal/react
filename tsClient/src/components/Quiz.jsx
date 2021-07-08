import React, { useContext, useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import {QUIZ_QUESTION} from '../helpers/Questions'
import { FaRegHandPointLeft, FaRegHandPointRight, FaTimes, FaTrashAlt, FaEdit} from 'react-icons/fa'
import Button from './Button'
import Modal from 'react-modal';
import TableHeader from './TableHeader';
import { CgAddR} from 'react-icons/cg'
import { RiLightbulbFlashFill } from 'react-icons/ri'
import AddQuiz from  './AddQuiz'
import Box from './Box'
import { AppContext } from '../AppContext';
import ReactLoading from 'react-loading';
import { deleteQuiz, deleteQuizQuestion } from '../action/actions';
import { toast } from 'react-toastify';
import { useRouteMatch } from 'react-router-dom';
import './Quiz.scss'


Modal.setAppElement('#root');

function Quiz() {
    
    const [addQuizModal, setAddQuizModal] = useState({
        isOpen: false,
        for: '',
        no : ''
    })

    const { dispatch, setQuizOpen, state: { course, courseDetail : {data, isLoading}}, courseId, quizOpen } = useContext(AppContext)
    
    const sliderRef = useRef(null)

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

    const handleAddQuizModal = () => {
        setAddQuizModal({isOpen: true, for : 'quiz'})
    }

    const handleDeleteQuestion = (no) => {
        deleteQuizQuestion(dispatch, courseId, no, toast)
    }

    const handleUpdateQuestion = (no) => {
        setAddQuizModal({isOpen: true, for : 'updating', no})
    }

    const handleAddQuestion = () => {
        setAddQuizModal({isOpen: true, for : 'question'})
    }

    const handleDeleteQuiz = () => {
        deleteQuiz(dispatch, courseId, toast)
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
                <TableHeader Icon={RiLightbulbFlashFill} headerText='Quiz'>
                    <div className="quiz__edit">
                        {!data?.quiz.length ? <Button onClick={handleAddQuizModal} style={{ marginRight: '1rem', backgroundColor: '#28a745' }} Icon={CgAddR}>Create Quiz</Button> :
                            <>
                                <Button onClick={handleAddQuestion} style={{ marginRight: '1rem', backgroundColor: '#28a745' }} Icon={CgAddR}>Add Question</Button>
                                <Button onClick={handleDeleteQuiz} style={{marginRight: '1rem', backgroundColor: "#db504a"}} Icon={FaTrashAlt}>Delete quiz</Button>
                            </>}
                            <Button onClick={()=>setQuizOpen(false)}  style={{backgroundColor : '#db504a'} } Icon={FaTimes}/>
                    </div>
                </TableHeader>
                {isLoading ?
                    <div className="quiz__loader">
                        <ReactLoading type="spin" color="green" height={40} width={40}/> 
                    </div> : !data?.quiz.length ?
                        <p className="warning">Sorry, no quiz data available!</p> :
                    <>
                        <Slider {...settings} ref={sliderRef} className="slider">
                            {QUIZ_QUESTION(data.quiz)?.map((ques, quesIndex) => {
                                return (
                                    <div key={quesIndex} className="quiz__box">
                                        <p className="quiz__question">No {ques.no} :- {ques.questionText}</p>
                                        <div className="quiz__answer">
                                            {ques.type.replace(/\s/g, "").toLowerCase() === 'multiplechoice' ?
                                            ques.options.map((opt, ansIndex) => {
                                                return (
                                                    <div key={ansIndex} className="quiz__ans__box">
                                                        <input type="radio" name="quiz__ans" />
                                                        <p className="quiz__ans" >{opt}</p>
                                                    </div>
                                                    )
                                            }) :
                                            <>
                                                <span>Your answer :</span>
                                                <textarea className="text__ans"/>
                                            </>
                                        }
                                        </div>
                                        <div className="question_config_btn">
                                            <Button onClick={()=>handleDeleteQuestion(ques.no)} Icon={FaTrashAlt} style={{backgroundColor: '#db504a', marginRight : '0.8rem'}}>Delete question</Button>
                                            <Button onClick={()=>handleUpdateQuestion(ques.no)} Icon={FaEdit}>Update question</Button>
                                        </div>
                                    </div>
                                )

                            })}
                        </Slider>
                            <div className="quiz__btn">
                                <FaRegHandPointLeft className="quiz__icon" onClick={() => sliderRef.current.slickPrev()}/>
                                <FaRegHandPointRight className="quiz__icon" onClick={()=> sliderRef.current.slickNext()}/>
                            </div>
                            </>
                        }
                    </Box>
            <AddQuiz addQuizModal={addQuizModal} setAddQuizModal={setAddQuizModal} />
        </Modal>
    )
}

export default Quiz
