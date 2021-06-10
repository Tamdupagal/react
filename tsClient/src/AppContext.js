import React, {createContext,useReducer, useState} from "react";

const AppContext = createContext({});

const initialState= {
    mobileView: false,
    products: null,
    users: null,
    cartValue: 0,
    cart:[],
    auth: {
        isSignedIn: false,
        user:null
    },
    categories:null,
    carousels:null,
    orders: null,
    cat:[],
    filter:{
        name: null
    },
    filteredCategories: {},
    filteredSubCategories:[],
    filteredProducts: [],
    isFilteredCategoryPresent: false,
    productsLimited: null
}

const reducer = (state, {type, payload})=>{
    console.log(type);
    switch (type){
        case "setMobileView":
            return {...state, mobileView: payload};
        case "isAuth":
            return {...state, auth:{ isSignedIn: payload.flag, user: payload.user}};
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