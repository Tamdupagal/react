import React from 'react'
import Button from '../Button/Button'
import del from '../../images/delete.svg'
import plus from '../../images/plus.svg'
import './Slot.scss';

function Slot({ index, setSlots,id}) {
    
    const delSlot = () => {
        setSlots(prev => prev.filter(item => item.id !== id))
    }
    const AddSlot = () => {
        setSlots(prev => [...prev, { id: Math.random()}])
    }
    return (
        <div className="slot">
            <div className="input__container">
                <div className="input__box">
                    <label className="label" htmlFor="time_start">Start</label>
                    <input type="time" name="time_start" />
                </div>
                <div className="input__box">
                    <label className="label" htmlFor="time_end">End</label>
                    <input type="time" name="time_end" />
                </div>
            </div>
            <div className="btn__box">
                {index > 0 && <Button img={del} onClick={delSlot} style={{backgroundColor: '#dc3545'}}/>}
            </div>
        {index === 0 && <Button img={plus} onClick={AddSlot} style={{ marginLeft: '3rem' }}>Add Slot</Button>}
            </div>
    )
}

export default Slot
