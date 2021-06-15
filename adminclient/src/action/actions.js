import axios from '../axios'
import { GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS } from './actionsType';


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


