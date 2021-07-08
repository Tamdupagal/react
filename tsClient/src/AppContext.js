import jwt_decode from "jwt-decode";
import React, {createContext,useReducer, useState} from "react";
import {COURSE_DETAIL_FAIL, COURSE_DETAIL_REQUEST, COURSE_DETAIL_SUCCESS, DELETE_ASSIGNMENT_FAIL, DELETE_ASSIGNMENT_REQUEST, DELETE_ASSIGNMENT_SUCCESS, DELETE_NOTE_FAIL, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_QUIZ_FAIL, DELETE_QUIZ_QUESTION_FAIL, DELETE_QUIZ_QUESTION_REQUEST, DELETE_QUIZ_QUESTION_SUCCESS, DELETE_QUIZ_REQUEST, DELETE_QUIZ_SUCCESS, FAKE_LOGIN_FAIL, FAKE_LOGIN_REQUEST, FAKE_LOGIN_SUCCESS, GET_ALL_ASSIGNMENT_FAIL, GET_ALL_ASSIGNMENT_REQUEST, GET_ALL_ASSIGNMENT_SUCCESS, GET_ALL_COURSES_FAIL, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_ALL_LECTURE_FAIL, GET_ALL_LECTURE_REQUEST, GET_ALL_LECTURE_SUCCESS, GET_ALL_NOTES_FAIL, GET_ALL_NOTES_REQUEST, GET_ALL_NOTES_SUCCESS, GET_QUIZ_FAIL, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_SUCCESS, POST_COURSE_ACTIVITY_FAIL, POST_COURSE_ACTIVITY_REQUEST, POST_COURSE_ACTIVITY_SUCCESS, POST_NEW_QUIZ_FAIL, POST_NEW_QUIZ_REQUEST, POST_NEW_QUIZ_SUCCESS, POST_NOTE_FAIL, POST_NOTE_REQUEST, POST_NOTE_SUCCESS, STUDENT_FAKE_AUTH, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT_REQUEST, STUDENT_LOGOUT_SUCCESS, TEACHER_LOGIN_REQUEST, TEACHER_LOGIN_SUCCESS, TEACHER_LOGOUT_REQUEST, TEACHER_LOGOUT_SUCCESS, UPDATE_ASSIGNMENT_FAIL, UPDATE_ASSIGNMENT_REQUEST, UPDATE_ASSIGNMENT_SUCCESS, UPDATE_QUIZ_QUESTION_FAIL, UPDATE_QUIZ_QUESTION_REQUEST, UPDATE_QUIZ_QUESTION_SUCCESS } from "./action/actionType";
const AppContext = createContext({});


const initialState = {
    auth: {
        isLoading: false,
        token: sessionStorage.getItem('key'),
        role : sessionStorage.getItem('role'),
        id: (token) => {
            if (!token) return null;
            const { data: { token_details: { id } } } = jwt_decode(token)
            return id;
        }
    },
    notes: {
        isLoading: false,
        notes : null,
    },
    course: {
        isLoading: false,
        data: null,
    },
    assignment: {
        isLoading: false,
        data: null,
    },
    courseActivity: {
        isLoading: false,
        res: null,
    },
    courseDetail: {
        isLoading: false,
        data: null,
    },
    lecture: {
        isLoading: false,
        data: null
    }
}

const reducer = (state, {type, payload})=>{
    console.log(type);
    switch (type){
        case LOGIN_REQUEST:
            return {...state, auth : {...state.auth, isLoading : true}}
        case LOGIN_SUCCESS:
            return { ...state, auth: { ...state.auth, token: payload.token, role : payload.role, isLoading: false } }
        case LOGIN_FAIL:
            return { ...state, auth: { ...state.auth, isLoading: false } }
        case STUDENT_FAKE_AUTH:
            return { ...state, auth: { ...state.auth, token: payload.token, role : payload.role, isLoading: false } }
        
        
        case LOGOUT_REQUEST:
            return {...state, auth : {...state.auth, isLoading : true}}
        case LOGOUT_SUCCESS:
            return { ...state, auth: { ...state.auth, token: null, isLoading: false } }
        case LOGOUT_FAIL:
            return { ...state, auth: { ...state.auth, isLoading: false } }
        
        
        case POST_NOTE_REQUEST:
            return {...state, notes : {...state.notes, isLoading : true}}
        case POST_NOTE_SUCCESS:
            return { ...state, notes: { ...state.notes,isLoading: false}}
        case POST_NOTE_FAIL:
            return { ...state, notes: { ...state.notes, isLoading: false } }
        
        case DELETE_NOTE_REQUEST:
            return {...state, notes : {...state.notes, isLoading : true}}
        case DELETE_NOTE_SUCCESS:
            return { ...state, notes: { ...state.notes,isLoading: false}}
        case DELETE_NOTE_FAIL:
            return { ...state, notes: { ...state.notes, isLoading: false } }
        
        
        case GET_ALL_NOTES_REQUEST:
            return {...state, notes : {...state.notes, isLoading : true}}
        case GET_ALL_NOTES_SUCCESS:
            return {...state, notes : {...state.notes, notes : payload,  isLoading: false}}
        case GET_ALL_NOTES_FAIL:
            return {...state, notes : {...state.notes,isLoading: false}}
        
        
        case GET_ALL_COURSES_REQUEST:
            return {...state, course : {...state.course, isLoading : true}}
        case GET_ALL_COURSES_SUCCESS:
            return {...state, course : {...state.course, data : payload,  isLoading: false}}
        case GET_ALL_COURSES_FAIL:
            return { ...state, course: { ...state.course, isLoading: false } }
        
        
        case COURSE_DETAIL_REQUEST:
            return {...state, courseDetail : {...state.courseDetail, isLoading : true}}
        case COURSE_DETAIL_SUCCESS:
            return {...state, courseDetail : {...state.courseDetail, data : payload,  isLoading: false}}
        case COURSE_DETAIL_FAIL:
            return { ...state, courseDetail: { ...state.courseDetail,isLoading: false } }

        
        case GET_ALL_ASSIGNMENT_REQUEST:
            return {...state ,  assignment : {...state.assignment, isLoading: true}}
        case GET_ALL_ASSIGNMENT_SUCCESS:
            return {...state,  assignment : {...state.assignment, data : payload, isLoading: false}}
        case GET_ALL_ASSIGNMENT_FAIL:
            return { ...state, isLoading: false,  assignment: { ...state.assignment, isLoading: false} }
        
        
        case POST_ASSIGNMENT_REQUEST:
            return {...state, assignment : {...state.assignment, isLoading : true}}
        case POST_ASSIGNMENT_SUCCESS:
            return {...state, assignment : {...state.assignment, isLoading: false}}
        case POST_ASSIGNMENT_FAIL:
            return {...state, assignment : {...state.assignment,isLoading: false}}
        
        case UPDATE_ASSIGNMENT_REQUEST:
            return {...state, assignment : {...state.assignment, isLoading : true}}
        case UPDATE_ASSIGNMENT_SUCCESS:
            return {...state, assignment : {...state.assignment, isLoading: false}}
        case UPDATE_ASSIGNMENT_FAIL:
            return { ...state, assignment: { ...state.assignment, isLoading: false } }
        
        case DELETE_ASSIGNMENT_REQUEST:
            return {...state, assignment : {...state.assignment, isLoading : true}}
        case DELETE_ASSIGNMENT_SUCCESS:
            return {...state, assignment : {...state.assignment, isLoading: false}}
        case DELETE_ASSIGNMENT_FAIL:
            return {...state, assignment : {...state.assignment,  isLoading: false}}
        
        
        case POST_COURSE_ACTIVITY_REQUEST:
            return {...state, courseActivity : {...state.courseActivity, isLoading : true}}
        case POST_COURSE_ACTIVITY_SUCCESS:
            return {...state, courseActivity : {...state.courseActivity, res : payload,  isLoading: false}}
        case POST_COURSE_ACTIVITY_FAIL:
            return { ...state, courseActivity: { ...state.courseActivity, isLoading: false } }
        
        case POST_NEW_QUIZ_REQUEST:
            return {...state, courseDetail : {...state.courseDetail, isLoading : true}}
        case POST_NEW_QUIZ_SUCCESS:
            return {...state, courseDetail : {...state.courseDetail, isLoading: false}}
        case POST_NEW_QUIZ_FAIL:
            return { ...state, courseDetail: { ...state.courseDetail, isLoading: false } }
        
        case UPDATE_QUIZ_QUESTION_REQUEST:
            return {...state, courseDetail : {...state.courseDetail, isLoading : true}}
        case UPDATE_QUIZ_QUESTION_SUCCESS:
            return {...state, courseDetail : {...state.courseDetail, isLoading: false}}
        case UPDATE_QUIZ_QUESTION_FAIL:
            return { ...state, courseDetail: { ...state.courseDetail, isLoading: false } }
        
        case DELETE_QUIZ_QUESTION_REQUEST:
            return {...state, courseDetail : {...state.courseDetail, isLoading : true}}
        case DELETE_QUIZ_QUESTION_SUCCESS:
            return {...state, courseDetail : {...state.courseDetail, isLoading: false}}
        case DELETE_QUIZ_QUESTION_FAIL:
            return { ...state, courseDetail: { ...state.courseDetail, isLoading: false } }
        
        
        case DELETE_QUIZ_REQUEST:
            return {...state, courseDetail : {...state.courseDetail, isLoading : true}}
        case DELETE_QUIZ_SUCCESS:
            return { ...state, courseDetail: { ...state.courseDetail, data: {quiz : []}, isLoading: false}}
        case DELETE_QUIZ_FAIL:
            return {...state, courseDetail : {...state.courseDetail,  isLoading: false}}

        
        case GET_ALL_LECTURE_REQUEST:
            return {...state, lecture : {...state.lecture, isLoading : true}}
        case GET_ALL_LECTURE_SUCCESS:
            return {...state, lecture : {...state.lecture, data : payload,  isLoading: false}}
        case GET_ALL_LECTURE_FAIL:
            return {...state, lecture : {...state.lecture, isLoading: false}}
        
        
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

    const [quizOpen, setQuizOpen] = useState(false)

    const [courseModal, setCourseModal] = useState(false)

    const [courseId, setCourseId] = useState()


    
    const value = {state, dispatch}

    return(
        <AppContext.Provider value={{...value , ...uiStateManager, setQuizOpen, quizOpen, setCourseModal, courseModal, setCourseId, courseId}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};