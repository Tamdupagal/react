import React, { useRef, useState } from 'react'
import Slot from './Slot'
import { Button } from "@material-ui/core";
import './SlotBox.scss'

function SlotBox() {
    const [slots, setSlots] = useState([
        {
            id: Math.random()
        }
    ])
    
    return (
        <div className="slot__container">
            {/* <div className="date__box">
                <label htmlFor="date">Date :</label>
                <input type="date" name="date"/>
            </div> */}
            {slots.map((item, index) =>
                    <Slot
                        key={item.id}
                        id={item.id}
                        index={index}
                        setSlots={setSlots}
                        />
            )}
        </div>
    )
}

export default SlotBox
