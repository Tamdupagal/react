import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import Box from './Box'
import Button from './Button'
import TableHeader from './TableHeader'
import { FaTimesCircle, FaSave, FaCheckCircle,  FaQuestionCircle, FaTimes} from 'react-icons/fa'
import { AppContext } from '../AppContext';
import {postNewQuiz, postNewQuizQuestion, updateQuizQuestion } from '../action/actions';
import Question from './Question';
import { toast } from 'react-toastify'
import Notification from './Notification'
import './AddQuiz.scss'


function AddQuiz({ addQuizModal, setAddQuizModal }) {
    
    const { dispatch, courseId} = useContext(AppContext)
    const [onSaveClick, setSaveClick] = useState(false);

    const [quizData, setQuizData] = useState([])

    // const initialValue = () => {
    //     switch (addQuizModal.for) {
    //         case 'updating':
    //         case 'question':
    //             return 
    //     }
    // }

    const [moreQuestion, setMoreQuestion] = useState([
        {
            id: Math.random(),
        }
    ])
    

    

    const handleQuizSubmit = () => {
         if (!onSaveClick) {
            toast.warn(<Notification>Make sure to save your quiz!</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                    }
            })
            return
        }
        if (!quizData.length) {
            toast.warn(<Notification>Umm..atleast try to add one question!</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                    }
            })
            return
        }
        const finalise = window.confirm(`You are adding a total of ${quizData.length} questions, confirm ? `)
        if (finalise) {
            if (addQuizModal.for === 'quiz') {
                const data = { quiz_details: quizData }
                postNewQuiz(dispatch, data, courseId, toast);
            } else if((addQuizModal.for === 'question')) {
                postNewQuizQuestion(dispatch, quizData[0], courseId, toast)
            } else {
                updateQuizQuestion(dispatch, quizData[0], courseId, addQuizModal.no, toast);
            }
            setSaveClick(false)
            setQuizData([])
            setMoreQuestion([{ id: Math.random() }])
            setAddQuizModal(false)
        }
    }
    


    return (
        <Modal
                isOpen={addQuizModal.isOpen}
                contentLabel="Example Modal"
                overlayClassName={{base : 'overlay', afterOpen : 'overlay_after_open', beforeClose : 'overlay_before_close'}}
                className={{base : 'content', afterOpen : 'content_after_open', beforeClose : 'content_before_close'}}
                closeTimeoutMS={300}
            >
            <Box cls="add__quiz__container">
                <TableHeader headerText="Add Questions" Icon={FaQuestionCircle}>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        {!onSaveClick && <Button style={{ marginRight: '0.8rem' }} onClick={() => setSaveClick(true)} Icon={FaSave}>Save quiz</Button>}
                        <Button style={{backgroundColor : '#fd7e14', marginRight: '0.8rem' }} Icon={FaCheckCircle} onClick={handleQuizSubmit}>Submit</Button>
                        <Button style={{backgroundColor: '#db504a'}} onClick={() => setAddQuizModal(false)} Icon={FaTimes}/>
                    </div>
                </TableHeader>
                <div className="quiz__box">
                    <div className='quiz__question__box'>
                        {moreQuestion.map((ques, index) => {
                            return (
                                <Question key={ques.id} id={ques.id} index={index} setMoreQuestion={setMoreQuestion} onSaveClick={onSaveClick} detail={addQuizModal} setQuizData={setQuizData} setSaveClick={setSaveClick}/>
                            )
                        })}
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default AddQuiz
