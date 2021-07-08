import React, { useEffect, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { IoMdRadioButtonOn } from 'react-icons/io'
import './InputOption.scss'

const InputOption = ({ id, index, setOption, onSaveQuestion, setOptionArray }) => {
    
    const [optionText, setOptionText] = useState('');

        const handleDelOpt = (e) => {
            if(!index) return;
            const target = e.target.closest('[data-id]')
            const option_unique_id = target.getAttribute('data-id')
            setOption(prev=> prev.filter(option => option.id != option_unique_id))
    }

    
    useEffect(() => {
        if (!onSaveQuestion) {
            setOptionArray([]);
            return
        }
        if (!optionText.length) {
            setOptionText(`Option ${index+1}`)
        }
        setOptionArray(prevOption=> [...prevOption, optionText]);
    }, [onSaveQuestion])



        return (
            <div className="option__box">
                <IoMdRadioButtonOn className="opt__icon" />
                <input id={id} placeholder={`option ${index+1}...`} data-option="options" onChange={(e) => setOptionText(e.target.value)} value={optionText} className={`input__option${onSaveQuestion ? " saved" : ""}`} type="text" />
                {index >= 1 && !onSaveQuestion && <button data-id={id} className="btn" onClick={handleDelOpt}>
                    <FaTimes className="opt__icon" />
                </button>}
            </div>
        )
    }

export default InputOption
