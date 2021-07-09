import React, { useEffect, useState } from 'react'
import InputOption from "./InputOptions"
import { FaPlusSquare, FaMinusSquare, FaPenSquare, FaSave, FaCalendarCheck, FaCheck} from 'react-icons/fa'
import { IoMdRadioButtonOn} from 'react-icons/io'
import './Question.scss'
import { toast } from 'react-toastify'
import Notification from './Notification'
// import Button from './Button';
import Select from 'react-select'
import Modal from 'react-modal'
import TableHeader from './TableHeader'
import { Box,Button }from "@material-ui/core"

 const questionTypes = [
        {value : 'short', label : 'Short answer'},
        {value : 'Multiple choice', label : 'Multiple choice'},
    ]

function Question({ id, index, setMoreQuestion, onSaveClick, setQuizData, setSaveClick, detail }) {

    const [questionType, setQuestionType] = useState()
    const [correctAns, setCorrectAns] = useState()
    const [questionText, setQuestionText] = useState("")
    const [onSaveQuestion, setOnSaveQuestion] = useState(false)
    const [ansKeyToggle, setAnsKeyToggle] = useState(false);
    const [option, setOption] = useState([
        {
            id: Math.random(),
        }
    ])
    const [optionArray, setOptionArray] = useState([])

    const handleCorrectOption = (e) => {
        setCorrectAns(e.target.getAttribute('data-option'))
    }

    const handleAddMoreQuestion = () => {
        if (!onSaveQuestion) {
            toast.warn(<Notification>Did you save you question?</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        if (questionType.value !== 'short' && !correctAns) {
            toast.warn(<Notification>Did you set answer key?</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        setMoreQuestion(prev => [...prev, { id: Math.random(), options: [] }])
    }


    const handleDelQuestion = (e) => {
        const target = e.target.closest('[data-question-id]')
        const question_unique_id = target.getAttribute('data-question-id')
        setMoreQuestion(prev => prev.filter(ques => ques.id != question_unique_id))
    }

    const handleQuesType = (option) => {
        setQuestionType(option)
    }

    const handleAddQuestion = (e) => {
        setQuestionText(e.target.value)
    }

    const addOption = () => {
        setOption(prev => [...prev, { id: Math.random() }])
    }

    const handleEdit = () => {
        setOnSaveQuestion(false)
        setSaveClick(false)
    }

    const handleSubmitAns = () => {
        if (!correctAns) {
            toast.warn(<Notification>Choose atleast one option!</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        setAnsKeyToggle(false)
    }

    const saveQuestion = () => {
        if (!questionType) {
            toast.warn(<Notification>Did you choose any question type?</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        if (!questionText) {
            toast.warn(<Notification>Question field cannot be empty!</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        if (questionType.value !== 'short' && option.length < 2) {
            toast.warn(<Notification>Add at least two options!</Notification>, {
                style: {
                    backgroundColor: '#db504a',
                }
            })
            return
        }
        
        setOnSaveQuestion(true)
    }

    useEffect(() => {
        if (onSaveClick) {

            if (!onSaveQuestion) {
                toast.warn(<Notification>Make sure to save all your question!</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                    }
                })
                setSaveClick(false);
                return
            }

            if (questionType.value !== 'short' && !correctAns) {
                toast.warn(<Notification>Did you set answer key for question {index + 1}?</Notification>, {
                    style: {
                        backgroundColor: '#db504a',
                    }
                })
                setSaveClick(false);
                return
            }
            setQuizData(prev => [...prev,
            {
                question: questionText,
                answer: correctAns || " ",
                question_type: questionType.value,
                options: optionArray || []
            }])
        }

    }, [onSaveClick])



    return (
        <>
            <div className='quiz__input__box'>
                <h2 className='quiz__title'>Question Type :</h2>
                <Select options={questionTypes} value={questionType} onChange={handleQuesType} />
            </div>

            <div className='quiz__input__box'>
                <h2 className={'quiz__title flex'}>Add Question :
                    {detail.for === "quiz" ?
                        <div style={{ display: 'flex' }}>
                            {index < 1 ?
                                <>
                                    <FaPlusSquare onClick={handleAddMoreQuestion} className='add__question' />
                                    <FaPenSquare onClick={handleEdit} className={`edit__question${onSaveQuestion ? "" : " disabled"}`} />
                                </>
                                :
                                <>
                                    <button style={{ border: "none", background: "transparent" }} data-question-id={id} onClick={handleDelQuestion}>
                                        <FaMinusSquare className='del__question' />
                                    </button>
                                    <FaPlusSquare onClick={handleAddMoreQuestion} className='add__question' />
                                    <FaPenSquare onClick={handleEdit} className={`edit__question${onSaveQuestion ? "" : " disabled"}`} />
                                </>
                            }
                        </div>
                        :
                        <FaPenSquare onClick={handleEdit} className={`edit__question${onSaveQuestion ? "" : " disabled"}`} />
                    }
                </h2>
                <textarea className={`quiz__textarea${onSaveQuestion ? " disabled" : ""}`} onChange={handleAddQuestion} value={questionText} />
            </div>


            {/* __________________________ OPTIONS JSX STARTS HERE __________________________________________ */}

            

            {questionType?.value !== 'short' ? <div className="option__container" >
                <h2 className='quiz__title'>Options :</h2>
                {option.map((slot, index) => {
                    return (
                        <InputOption key={slot.id} index={index} id={slot.id} setOption={setOption} onSaveQuestion={onSaveQuestion} setOptionArray={setOptionArray} />
                    )
                })}
                {
                    !onSaveQuestion ?
                        <div style={{ display: 'flex' }}>
                            <Button onClick={addOption} style={{ backgroundColor: '#007bff', marginRight: '0.5rem' }} Icon={IoMdRadioButtonOn}>Add Option</Button>
                            <Button onClick={saveQuestion} style={{ backgroundColor: '#696ffb' }} Icon={FaSave}>Save question</Button>
                        </div>
                        :
                        <Button onClick={() => setAnsKeyToggle(true)} style={{ backgroundColor: '#696ffb' }} Icon={FaCalendarCheck}>Set answer key</Button>
                }
                <Modal
                    isOpen={ansKeyToggle}
                    contentLabel="Example Modal"
                    overlayClassName={{ base: 'overlay', afterOpen: 'overlay_after_open', beforeClose: 'overlay_before_close' }}
                    className={{ base: 'content', afterOpen: 'content_after_open', beforeClose: 'content_before_close' }}
                    closeTimeoutMS={300}
                >
                    <Box>
                        <TableHeader headerText="Choose correct answer :" Icon={FaCalendarCheck} />
                        <div className="answerkey__box">
                            {optionArray.map((option, index) => {
                                if (!option.length) {
                                    option = `Option ${index + 1}`
                                }
                                return (
                                    <div className="option_box" key={index}>
                                        {correctAns === option ?
                                            <input onClick={handleCorrectOption} data-option={correctAns} type="radio" name="option" id={`option_${index}`} defaultChecked />
                                            :
                                            <input onClick={handleCorrectOption} data-option={option} type="radio" name="option" id={`option_${index}`} />}
                                        <label htmlFor={`option_${index}`} className="option" id={`option_${index}`}>{option}</label>
                                    </div>
                                )
                            })}
                            <Button onClick={handleSubmitAns} Icon={FaCheck}>Done</Button>
                        </div>
                    </Box>
                </Modal>
            </div> :
                !onSaveQuestion && <Button onClick={saveQuestion} style={{ backgroundColor: '#696ffb' }} Icon={FaSave}>Save question</Button>
            }

        </>
    )
}

export default Question
