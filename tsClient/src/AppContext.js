import React, {createContext,useReducer, useState} from "react";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action/actionType";

const AppContext = createContext({});

const initialState= {
    auth: {
        isLoading: false,
        token : null,
        anyError: null,
   }
}

const reducer = (state, {type, payload})=>{
    console.log(type);
    switch (type){
        case LOGIN_REQUEST:
            return {...state, auth : {...state.auth, isLoading : true}}
        case LOGIN_SUCCESS:
            return {...state, auth : {...state.auth, token : payload}}
        case LOGIN_FAIL:
            return {...state, auth : {...state.auth, anyError : payload}}
        default:
            return state;
    }
}
 
const AppContextProvider = ({children}) => {
    // _____________________________________________________________

    // Ui related settings do not tweak 

    const [toggle, setToggle] = useState(false)
    const [slotState, setSlotState] = useState([" "]);
    const [toggleForm, setToggleForm] = useState(false);
    const [theme, setTheme] = useState(false);

    const uiStateManager = {toggle, setToggle, slotState, setSlotState, toggleForm, setToggleForm, theme, setTheme}
    // _____________________________________________________________

    const [state, dispatch] = useReducer(reducer, initialState); 


    
    const value = {state, dispatch}

    return(
        <AppContext.Provider value={{...value , ...uiStateManager}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};