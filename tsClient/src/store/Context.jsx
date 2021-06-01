import React, { createContext, useReducer, useState } from 'react'

export const context = createContext();



function Context({children}) {
    const [toggle, setToggle] = useState(false)
    const [slotState, setSlotState] = useState([" "]);
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <context.Provider value={{toggle, setToggle, slotState, setSlotState, setToggleForm, toggleForm}}>
            {children}
        </context.Provider>
    )
}

export default Context
