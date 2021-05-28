import React, { createContext, useReducer, useState } from 'react'

export const context = createContext();



function Context({children}) {
    const [toggle, setToggle] = useState(false)
    const [slotState, setSlotState] = useState([" "]);
    return (
        <context.Provider value={{toggle, setToggle, slotState, setSlotState}}>
            {children}
        </context.Provider>
    )
}

export default Context
