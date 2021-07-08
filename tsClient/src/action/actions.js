import axios from '../axios'
import {COURSE_DETAIL_FAIL, COURSE_DETAIL_REQUEST, COURSE_DETAIL_SUCCESS, DELETE_ASSIGNMENT_FAIL, DELETE_ASSIGNMENT_REQUEST, DELETE_ASSIGNMENT_SUCCESS, DELETE_NOTE_FAIL, DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_QUIZ_FAIL, DELETE_QUIZ_QUESTION_FAIL, DELETE_QUIZ_QUESTION_REQUEST, DELETE_QUIZ_QUESTION_SUCCESS, DELETE_QUIZ_REQUEST, DELETE_QUIZ_SUCCESS, FAKE_LOGIN_FAIL, FAKE_LOGIN_REQUEST, FAKE_LOGIN_SUCCESS, GET_ALL_ASSIGNMENT_FAIL, GET_ALL_ASSIGNMENT_REQUEST, GET_ALL_ASSIGNMENT_SUCCESS, GET_ALL_COURSES_FAIL, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_ALL_LECTURE_FAIL, GET_ALL_LECTURE_REQUEST, GET_ALL_LECTURE_SUCCESS, GET_ALL_NOTES_FAIL, GET_ALL_NOTES_REQUEST, GET_ALL_NOTES_SUCCESS, GET_QUIZ_FAIL, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, POST_ASSIGNMENT_FAIL, POST_ASSIGNMENT_REQUEST, POST_ASSIGNMENT_SUCCESS, POST_COURSE_ACTIVITY_FAIL, POST_COURSE_ACTIVITY_REQUEST, POST_COURSE_ACTIVITY_SUCCESS, POST_NEW_QUIZ_FAIL, POST_NEW_QUIZ_REQUEST, POST_NEW_QUIZ_SUCCESS, POST_NOTE_FAIL, POST_NOTE_REQUEST, POST_NOTE_SUCCESS, POST_QUIZ_QUESTION_FAIL, POST_QUIZ_QUESTION_REQUEST, POST_QUIZ_QUESTION_SUCCESS, UPDATE_ASSIGNMENT_FAIL, UPDATE_ASSIGNMENT_REQUEST, UPDATE_ASSIGNMENT_SUCCESS, UPDATE_QUIZ_QUESTION_FAIL, UPDATE_QUIZ_QUESTION_REQUEST, UPDATE_QUIZ_QUESTION_SUCCESS } from './actionType';
import Notification from '../components/Notification'

export const auth = async (dispatch, authFor, data, toast) => {
        console.log(authFor)
        dispatch({ type: LOGIN_REQUEST })
            try {
                const { data: { token, role } } = await axios.post(`auth/api/${authFor}/login`, data)
                if (!token) {
                    dispatch({ type: LOGIN_FAIL })
                    toast.error(<Notification>Some went wrong on the server side!</Notification>)
                    return
                }
                dispatch({ type: LOGIN_SUCCESS, payload: {token, role} })
                sessionStorage.setItem("key", token);
                sessionStorage.setItem("role", role);
            } catch (err) {
                dispatch({ type: LOGIN_FAIL })
                toast.error(<Notification>{err.response.data.message}</Notification>)
        }        
}

export const logout = (dispatch,toast) => {
    dispatch({ type: LOGOUT_REQUEST })
        try {
            dispatch({ type: LOGOUT_SUCCESS})
        } catch (err) {
            dispatch({ type: LOGOUT_FAIL })
            toast.error(<Notification>{err.response.data}</Notification>)
        }
}



export const getAllNote = async(dispatch, toast) => {
    try {
        const res = await axios.get("lms/api/note/all")
        dispatch({ type: GET_ALL_NOTES_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_ALL_NOTES_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const postNewNote = async(dispatch, data, toast) => {
    dispatch({ type: POST_NOTE_REQUEST })
    try {
        const res = await axios.post("lms/api/addNote", data)
        dispatch({ type: POST_NOTE_SUCCESS})
        toast.success(<Notification>Added Successfully</Notification>)
        getAllNote(dispatch, toast)
    } catch (err) {
        dispatch({ type: POST_NOTE_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const deleteNote = async(dispatch, id, toast) => {
    dispatch({ type: DELETE_NOTE_REQUEST })
    try {
        const res = await axios.delete(`lms/api/deleteNote/${id}`)
        dispatch({ type: DELETE_NOTE_SUCCESS})
        toast.success(<Notification>Deleted Successfully!</Notification>)
        getAllNote(dispatch, toast)
    } catch (err) {
        dispatch({ type: DELETE_NOTE_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const getallCourses = async (dispatch, toast) => {
    try {
        const res = await axios.get("lms/api/student/courses/all")
        dispatch({ type: GET_ALL_COURSES_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_ALL_COURSES_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}


export const getCourseDetail = async (dispatch, id, toast) => {
    dispatch({ type: COURSE_DETAIL_REQUEST })
    try {
        const res = await axios.get(`admin/api/course/details/${id}`)
        dispatch({ type: COURSE_DETAIL_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: COURSE_DETAIL_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const getAllAssignment = async (dispatch, toast) => {
    try {
        const res = await axios.get("lms/api/assignment/all")
        dispatch({ type: GET_ALL_ASSIGNMENT_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_ALL_ASSIGNMENT_FAIL })
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const postNewAssignment = async (dispatch, data, toast) => {
     dispatch({ type: POST_ASSIGNMENT_REQUEST })
    try {
        const res = await axios.post("lms/api/assignment/new", data)
        dispatch({ type: POST_ASSIGNMENT_SUCCESS, payload: res.data })
        toast.success(<Notification>Added Successfully</Notification>)
        getAllAssignment(dispatch, toast)
    } catch (err) {
        dispatch({ type: POST_ASSIGNMENT_FAIL})
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const updateAssignment = async (dispatch, data,id, toast) => {
     dispatch({ type: UPDATE_ASSIGNMENT_REQUEST })
    try {
        await axios.put(`lms/api/assignment/update/${id}`, data)
        dispatch({ type: UPDATE_ASSIGNMENT_SUCCESS })
        toast.success(<Notification>Updated Successfully!</Notification>)
        getAllAssignment(dispatch, toast)
    } catch (err) {
        dispatch({ type: UPDATE_ASSIGNMENT_FAIL})
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const deleteAssignment = async (dispatch, id, toast) => {
     dispatch({ type: DELETE_ASSIGNMENT_REQUEST })
    try {
        await axios.delete(`lms/api/assignment/delete/${id}`)
        dispatch({ type: DELETE_ASSIGNMENT_SUCCESS})
        toast.success(<Notification>Deleted Successfully!</Notification>)
        getAllAssignment(dispatch, toast)
    } catch (err) {
        dispatch({ type: DELETE_ASSIGNMENT_FAIL})
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}



export const postNewCourseActivity = async (dispatch, data, toast) => {
     dispatch({ type: POST_COURSE_ACTIVITY_REQUEST })
    try {
        const res = await axios.post("lms/api/newCourseActivity", data)
        dispatch({ type: POST_COURSE_ACTIVITY_SUCCESS, payload: res.data })
        toast.success(<Notification>Added Successfully</Notification>)
    } catch (err) {
        dispatch({ type: POST_COURSE_ACTIVITY_FAIL})
        toast.error(<Notification>Ops ! Some error has occured, try again later!</Notification>)
    }
}


export const postNewQuiz = async (dispatch, data, id, toast) => {
     dispatch({ type: POST_NEW_QUIZ_REQUEST })
    try {
        await axios.post(`admin/api/course/${id}/quiz/new`, data)
        dispatch({ type: POST_NEW_QUIZ_SUCCESS})
        toast.success(<Notification>Quiz Added Successfully</Notification>)
        getCourseDetail(dispatch, id, toast);
    } catch (err) {
        dispatch({ type: POST_NEW_QUIZ_FAIL})
        toast.error(<Notification>{err.response.data}</Notification>)
    }
}

export const postNewQuizQuestion = async (dispatch, data, id, toast) => {
     dispatch({type: POST_QUIZ_QUESTION_REQUEST })
    try {
        const res = await axios.post(`admin/api/course/${id}/quiz/add/question`, data)
        dispatch({ type: POST_QUIZ_QUESTION_SUCCESS})
        toast.success(<Notification>Question Added Successfully!</Notification>)
        getCourseDetail(dispatch, id, toast);
    } catch (err) {
        dispatch({ type: POST_QUIZ_QUESTION_FAIL})
        toast.error(<Notification>{err.response.data}</Notification>)
    }
}

export const updateQuizQuestion = async (dispatch, data, id, no,  toast) => {
     dispatch({type: UPDATE_QUIZ_QUESTION_REQUEST })
    try {
        const res = await axios.put(`admin/api/course/${id}/quiz/update/question/${no}`, data)
        dispatch({ type: UPDATE_QUIZ_QUESTION_SUCCESS})
        toast.success(<Notification>Question Updated Successfully!</Notification>)
        getCourseDetail(dispatch, id, toast);
    } catch (err) {
        dispatch({ type: UPDATE_QUIZ_QUESTION_FAIL})
        toast.error(<Notification>{err.response.data}</Notification>)
    }
}


export const deleteQuiz = async (dispatch, id, toast) => {
     dispatch({ type: DELETE_QUIZ_REQUEST })
    try {
        await axios.delete(`admin/api/course/${id}/quiz/delete`)
        dispatch({ type: DELETE_QUIZ_SUCCESS})
        toast.success(<Notification>Deleted Successfully!</Notification>)
    } catch (err) {
        dispatch({ type: DELETE_QUIZ_FAIL})
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}


export const deleteQuizQuestion = async (dispatch, id, no, toast) => {
     dispatch({ type: DELETE_QUIZ_QUESTION_REQUEST })
    try {
        await axios.delete(`admin/api/course/${id}/quiz/delete/question/${no}`)
        dispatch({ type: DELETE_QUIZ_QUESTION_SUCCESS})
        toast.success(<Notification>Deleted Successfully!</Notification>)
        getCourseDetail(dispatch, id, toast);
    } catch (err) {
        dispatch({ type: DELETE_QUIZ_QUESTION_FAIL})
        toast.error(<Notification>{err.response.data}!</Notification>)
    }
}

export const getAllLecture = async (dispatch, toast) => {
    dispatch({ type: GET_ALL_LECTURE_REQUEST})
    try {
        const res = await axios.get(`admin/api/lectures/all`)
        dispatch({ type: GET_ALL_LECTURE_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_ALL_LECTURE_FAIL})
        toast.error(<Notification>{err.response.data}</Notification>)
    }
}





