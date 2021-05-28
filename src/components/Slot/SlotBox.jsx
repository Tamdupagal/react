import React, { useRef, useState } from 'react'
import Slot from './Slot'
import Button from '../Button/Button'
import './SlotBox.scss'

function SlotBox() {
    const [slots, setSlots] = useState([
        {
            id: Math.random()
        }
    ])
    
    return (
        <div className="slot__container">
            <div className="date__box">
                <label htmlFor="date">Date :</label>
                <input type="date" name="date"/>
            </div>
            {slots.map((item, index) =>
                    <Slot
                        key={item.id}
                        id={item.id}
                        index={index}
                        setSlots={setSlots}
                        />
            )}
            <div className="schedule__btn__box">
                <Button style={{ backgroundColor: "#0069d9" }}>Add Schedule</Button>
            </div>
        </div>
    )
}

export default SlotBox
