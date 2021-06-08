import React, {createContext,useReducer} from "react";
import _ from 'lodash';

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

const reducer = (state, action)=>{
    console.log(action.type);
    switch (action.type){
        case "setMobileView":
            return {...state, mobileView: action.payload};
        case "isAuth":
            return {...state, auth:{ isSignedIn: action.payload.flag, user: action.payload.user}};
        default:
            return {...state};
    }
}
 
const AppContextProvider= (props)=>{
    const appState= {...initialState};

    const [state,dispatch]= useReducer(reducer,appState);

    let value = {state,dispatch};

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};