import React, { useContext, useState } from 'react'
import Slot from './Slot'
import Button from './Button'
import './SlotBox.scss'
import { AppContext } from '../../AppContext'

function SlotBox() {
    const {theme} = useContext(AppContext)
    const [slots, setSlots] = useState([
        {
            id: Math.random()
        }
    ])
    
    return (
        <div className={`slot__container${theme ? ' dark' : ''}`}>
            <div className="date__box">
                <label htmlFor="date">Date :</label>
                <input type="date"/>
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
