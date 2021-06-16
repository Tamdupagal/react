import axios from '../axios'
import { ADD_CLASSROOM_FAIL, ADD_CLASSROOM_REQUEST, ADD_CLASSROOM_SUCCESS, GET_ALL_CLASSROOMS_FAIL, GET_ALL_CLASSROOMS_REQUEST, GET_ALL_CLASSROOMS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS } from './actionsType';


// export const mobileView= (flag)=>{
//     return {
//         type: "setMobileView",
//         payload:flag
//     }
// }

// export const auth = (user,flag)=>{
//     console.log(user);
//     return {
//         type: "isAuth",
//         payload: {
//             user,
//             flag,
//         }
//     }
// }
export const getAllStudents = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_STUDENTS_REQUEST})
        const res = await axios.get('students/all')
        dispatch({type : GET_ALL_STUDENTS_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_STUDENTS_FAIL, payload : err})
    }
}

export const getAllTeachers = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_TEACHERS_REQUEST })
        const res = await axios.get('teachers/all')
        dispatch({type : GET_ALL_TEACHERS_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_TEACHERS_FAIL, payload : err})
    }
}

export const getAllClassrooms = async (dispatch) => {
    try {
        dispatch ({ type: GET_ALL_CLASSROOMS_REQUEST })
        const res = await axios.get('classroom/all')
        console.log(res.data)
        // console.log(value)
        // console.log(state.classroomData.classrooms)
        dispatch({type : GET_ALL_CLASSROOMS_SUCCESS, payload : res.data})
        // console.log(state.classroomData)
    } catch (err) {
        dispatch({type : GET_ALL_CLASSROOMS_FAIL, payload : err})
    }
}

export const addClassroom = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_CLASSROOM_REQUEST })
        await axios.post('classroom/new',data)
        console.log(data)
        dispatch({type : ADD_CLASSROOM_SUCCESS, payload : data})
        // console.log(state.classroomData)
    } catch (err) {
        dispatch({type : ADD_CLASSROOM_FAIL, payload : err})
    }
}

