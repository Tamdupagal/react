import React from 'react'
import Button from '../Button/Button'
import Checkbox from './Checkbox'
import edit from '../../images/edit.svg'
import del from '../../images/delete.svg'
import plus from '../../images/plus.svg'
import dash from '../../images/dash.svg'
import './Slot.scss';

function Slot() {
    return (
        <div className="slot__container">
            <Checkbox>Sunday</Checkbox>
            <div className="slot">
                <div className="input__box">
                    <label className="label" htmlFor="time_start">Start</label>
                    <input type="time" name="time_start" />
                </div>
                <img src={dash} alt="dash"/>
                <div className="input__box">
                    <label className="label" htmlFor="time_end">End</label>
                    <input type="time" name="time_end" />
                </div>
                <div className="btn__box">
                    <Button img={del} style={{backgroundColor: '#dc3545', marginRight: '0.5rem'}}/>
                    <Button img={edit} style={{ backgroundColor: '#0069d9' }} />
                </div>
                <Button img={plus}>Add Slot</Button>
            </div>
        </div>
    )
}

export default Slot
