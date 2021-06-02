import React, { useContext} from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'
import Select from 'react-select'
import { FaTimes } from 'react-icons/fa'
import {context} from '../../store/Context'

import './Form.scss'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : '#0069d9',
        padding: 10,
        fontSize: '1.5rem',
    }),
}

function Form() {
    const { setToggleForm, toggleForm} = useContext(context)
    const handleForm = (e) => {
        if (e.target.classList.contains("form__wrapper")) {
            setToggleForm(prev=>!prev)
        }
        return
    }
    return (
        <div onClick={handleForm} className={`form__wrapper${toggleForm ? " active" : ""}`}>
            <Box cls="feedback__form">
                <h1 className="form__title">{"Class Feedback"} <FaTimes onClick={()=>setToggleForm(prev=>!prev)} className="close__btn" /></h1>
                <hr />
                <div className="form__input">
                    <span >Lecture's Information</span>
                    <Select styles={customStyles} options={options} />
                </div>
                <div className="form__input">
                    <span >Feedback Type</span>
                    <Select styles={customStyles} options={options} />
                </div>
                <div className="form__input">
                    <span >Teacher Name</span>
                    <div className="teacher__name">Utkarsh Agrawal</div>
                </div>
                <div className="form__input">
                    <span>Rate Kid's Logic / Common Sense Out of 10</span>
                    <input type="number"/>
                </div>
                <div className="form__input">
                    <span>Rate Kid's Creativity Out of 10</span>
                    <input type="number"/>
                </div>
                <div className="form__input">
                    <span>Kid's strength and weakness</span>
                    <textarea/>
                </div>
                <Button>Submit</Button>
            </Box>
        </div>
    )
}

export default Form
