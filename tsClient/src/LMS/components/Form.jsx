import React, { useContext} from 'react'
import Select from 'react-select'
import { ImCross } from 'react-icons/im'
import {customStyles} from '../helpers/ReactSelect'
import { AppContext } from '../../AppContext'
import './Form.scss'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



function Form() {
    const { setToggleForm, toggleForm, theme} = useContext(AppContext)
    const handleForm = (e) => {
        if (e.target.classList.contains("form__wrapper")) {
            setToggleForm(prev=>!prev)
        }
        return 
    }
    return (
        <>
            <div className={`form__wrapper${toggleForm ? " active" : ""}`} onClick={handleForm}/>
        <div className={`feedback__form${toggleForm ? " active" : ""}${theme ? " dark" : ""}`}>
                    <h1 className="form__title">Class Feedback</h1>
                    <div className="form__area">
                        <div className="close__btn" onClick={()=>setToggleForm(prev=>!prev)}><ImCross className="icon__close"/></div>
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
                    </div>
                    <button type="button" className="form__submit__btn">Submit</button>
            </div>
            </>
    )
}

export default Form
