import React, {createContext,useReducer} from "react";
import {GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS, isAuth, setMobileView } from "./action/actionTypes";

const AppContext = createContext({});

const initialState= {
    mobileView: false,
    products: null,
    users: null,
    studentData: {
        students: [],
        isLoading: false,
        anyError : null
    },
    teacherData: {
        teachers: [],
        isLoading: false,
        anyError : null
    },
}

const reducer = (state, {type, payload})=>{
    switch (type) {
        
        case GET_ALL_STUDENTS_REQUEST:
            return ({ ...state, studentData: { ...state.studentData, isLoading: true } })
        case GET_ALL_STUDENTS_SUCCESS:
            return ({ ...state, studentData: { ...state.studentData, students: payload, isLoading: false}})
        case GET_ALL_STUDENTS_FAIL:
            return ({ ...state, studentData: { ...state.studentData, anyError: payload, isLoading: false } })
        
        
        case GET_ALL_TEACHERS_REQUEST:
            return ({ ...state, teacherData: { ...state.teacherData, isLoading: true } })
        case GET_ALL_TEACHERS_SUCCESS:
            return ({ ...state, teacherData: { ...state.teacherData, teachers: payload, isLoading: false}})
        case GET_ALL_TEACHERS_FAIL:
            return ({ ...state, teacherData: { ...state.teacherData, anyError: payload, isLoading: false}})
        
        default: return state;
    }
}
 
const AppContextProvider= (props)=>{

    const [state,dispatch] = useReducer(reducer, initialState);

    let value = {state,dispatch};

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};