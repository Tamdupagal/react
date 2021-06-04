import React, { createContext, useState } from 'react'

export const context = createContext();



function Context({children}) {
    const [toggle, setToggle] = useState(false)
    const [slotState, setSlotState] = useState([" "]);
    const [toggleForm, setToggleForm] = useState(false);
    const [theme, setTheme] = useState(false);

    return (
        <context.Provider value={
            {
                toggle,
                setToggle,
                slotState,
                setSlotState,
                setToggleForm,
                toggleForm,
                setTheme,
                theme,
            }
        }>
            {children}
        </context.Provider>
    )
}

export default Context
