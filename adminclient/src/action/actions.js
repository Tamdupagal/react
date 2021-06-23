import axios from '../axios'
import { ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, ADD_CLASSROOM_FAIL, ADD_CLASSROOM_REQUEST, ADD_CLASSROOM_SUCCESS, ADD_LECTURE_FAIL, ADD_LECTURE_REQUEST, ADD_LECTURE_SUCCESS, ADD_STUDENT_FAIL, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_TEACHER_FAIL, ADD_TEACHER_REQUEST, ADD_TEACHER_SUCCESS, DELETE_ADMIN_FAIL, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, DELETE_CLASSROOM_FAIL, DELETE_CLASSROOM_REQUEST, DELETE_CLASSROOM_SUCCESS, DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, DELETE_TEACHER_FAIL, DELETE_TEACHER_REQUEST, DELETE_TEACHER_SUCCESS, EDIT_ADMIN_FAIL, EDIT_ADMIN_REQUEST, EDIT_ADMIN_SUCCESS, EDIT_CLASSROOM_FAIL, EDIT_CLASSROOM_REQUEST, EDIT_CLASSROOM_SUCCESS, EDIT_STUDENT_FAIL, EDIT_STUDENT_REQUEST, EDIT_STUDENT_SUCCESS, EDIT_TEACHER_FAIL, EDIT_TEACHER_REQUEST, EDIT_TEACHER_SUCCESS, GET_ALL_ADMINS_FAIL, GET_ALL_ADMINS_REQUEST, GET_ALL_ADMINS_SUCCESS, GET_ALL_CLASSROOMS_FAIL, GET_ALL_CLASSROOMS_REQUEST, GET_ALL_CLASSROOMS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS, GET_EDIT_ADMIN_FAIL, GET_EDIT_ADMIN_SUCCESS, GET_EDIT_CLASSROOM_FAIL, GET_EDIT_CLASSROOM_SUCCESS, GET_EDIT_STUDENT_FAIL, GET_EDIT_STUDENT_SUCCESS, GET_EDIT_TEACHER_FAIL, GET_EDIT_TEACHER_SUCCESS } from './actionsType';


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



export const getAllClassrooms = async (dispatch) => {
    try {
        dispatch ({ type: GET_ALL_CLASSROOMS_REQUEST })
        const res = await axios.get('classroom/all')
        dispatch({type : GET_ALL_CLASSROOMS_SUCCESS, payload : res.data})
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
        getAllClassrooms(dispatch)
        // console.log(state.classroomData)
    } catch (err) {
        dispatch({type : ADD_CLASSROOM_FAIL, payload : err})
    }
}

export const editClassroomData = async (dispatch,data) => {
    try{
        dispatch({type : GET_EDIT_CLASSROOM_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type : GET_EDIT_CLASSROOM_FAIL, payload : err})
    }
}

export const editClassroom = async (dispatch, data, id) => {
    try{
        dispatch ({ type: EDIT_CLASSROOM_REQUEST })
        await axios.put(`/classroom/update/${id}`, data)
        dispatch({type : EDIT_CLASSROOM_SUCCESS, payload : data})
        console.log(data)
        getAllClassrooms(dispatch)
    } catch (err) {
        dispatch({type : EDIT_CLASSROOM_FAIL, payload : err})
    }
}

export const deleteClassroom = async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_CLASSROOM_REQUEST })
        await axios.delete(`/classroom/${id}`)
        dispatch({type : DELETE_CLASSROOM_SUCCESS, payload: id})
        getAllClassrooms(dispatch)
    } catch (err) {
        dispatch({type : DELETE_CLASSROOM_FAIL, payload : err})
        // console.log(err)
    }
}

// *****************STUDENTS*****************

export const getAllStudents = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_STUDENTS_REQUEST})
        const res = await axios.get('students/all')
        dispatch({type : GET_ALL_STUDENTS_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_STUDENTS_FAIL, payload : err})
    }
}

export const addStudent = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_STUDENT_REQUEST })
        await axios.post('students/new',data)
        console.log(data)
        dispatch({type : ADD_STUDENT_SUCCESS, payload : data})
        getAllStudents(dispatch)
    } catch (err) {
        dispatch({type : ADD_STUDENT_FAIL, payload : err})
    }
}

export const editStudentData = async (dispatch,data) => {
    try{
        dispatch({type : GET_EDIT_STUDENT_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type : GET_EDIT_STUDENT_FAIL, payload : err})
    }
}

export const editStudent = async (dispatch, data, id) => {
    try{
        dispatch ({ type: EDIT_STUDENT_REQUEST })
        console.log(data)
        await axios.put(`/students/update/${id}`, data)
        dispatch({type : EDIT_STUDENT_SUCCESS, payload : data})
        getAllStudents(dispatch)
    } catch (err) {
        dispatch({type : EDIT_STUDENT_FAIL, payload : err})
    }
}

export const deleteStudent= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_STUDENT_REQUEST })
        await axios.delete(`/students/${id}`)
        dispatch({type : DELETE_STUDENT_SUCCESS, payload: id})
        getAllStudents(dispatch)
    } catch (err) {
        dispatch({type : DELETE_STUDENT_FAIL, payload : err})
        // console.log(err)
    }
}

// *****************TEACHERS*****************

export const getAllTeachers = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_TEACHERS_REQUEST })
        const res = await axios.get('teachers/all')
        dispatch({type : GET_ALL_TEACHERS_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_TEACHERS_FAIL, payload : err})
    }
}

export const addTeacher = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_TEACHER_REQUEST})
        console.log(data)
        await axios.post('teachers/new',data)
        console.log(data)
        dispatch({type : ADD_TEACHER_SUCCESS, payload : data})
        getAllTeachers(dispatch)
    } catch (err) {
        dispatch({type : ADD_TEACHER_FAIL, payload : err})
    }
}

export const editTeacherData = async (dispatch,data) => {
    try{
        console.log(data)
        dispatch({type : GET_EDIT_TEACHER_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type : GET_EDIT_TEACHER_FAIL, payload : err})
    }
}

export const editTeacher = async (dispatch, data, id) => {
    try{
        dispatch ({ type: EDIT_TEACHER_REQUEST })
        await axios.put(`/teachers/update/${id}`, data)
        dispatch({type : EDIT_TEACHER_SUCCESS, payload : data})
        getAllTeachers(dispatch)
    } catch (err) {
        dispatch({type : EDIT_TEACHER_FAIL, payload : err})
    }
}

export const deleteTeacher= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_TEACHER_REQUEST })
        await axios.delete(`/teachers/${id}`)
        dispatch({type : DELETE_TEACHER_SUCCESS, payload: id})
        getAllTeachers(dispatch)
    } catch (err) {
        dispatch({type : DELETE_TEACHER_FAIL, payload : err})
        // console.log(err)
    }
}

// *****************LECTURES*****************

export const addLecture = async (dispatch,data,id) => {
    try {
        dispatch ({ type: ADD_LECTURE_REQUEST })
        await axios.post(`/classroom/${id}/lecture/new`,data)
        console.log(data)
        dispatch({type : ADD_LECTURE_SUCCESS, payload : data})
        // getAllLectures(dispatch)
    } catch (err) {
        dispatch({type : ADD_LECTURE_FAIL, payload : err})
    }
}

// *****************ADMIN*****************
export const getAllAdmins = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_ADMINS_REQUEST })
        const res = await axios.get('admin/all')
        console.log(res.data)
        dispatch({type : GET_ALL_ADMINS_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_ADMINS_FAIL, payload : err})
    }
}

export const addAdmin = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_ADMIN_REQUEST})
        console.log(data)
        await axios.post('admin/new',data)
        console.log(data)
        dispatch({type : ADD_ADMIN_SUCCESS, payload : data})
        getAllAdmins(dispatch)
    } catch (err) {
        dispatch({type : ADD_ADMIN_FAIL, payload : err})
    }
}

export const editAdminData = async (dispatch,data) => {
    try{
        console.log(data)
        dispatch({type : GET_EDIT_ADMIN_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type : GET_EDIT_ADMIN_FAIL, payload : err})
    }
}

export const editAdmin = async (dispatch, data, id) => {
    try{
        dispatch ({ type: EDIT_ADMIN_REQUEST })
        await axios.put(`/admin/update/${id}`, data)
        dispatch({type : EDIT_ADMIN_SUCCESS, payload : data})
        getAllAdmins(dispatch)
    } catch (err) {
        dispatch({type : EDIT_ADMIN_FAIL, payload : err})
    }
}

export const deleteAdmin= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_ADMIN_REQUEST})
        await axios.delete(`/admin/${id}`)
        dispatch({type : DELETE_ADMIN_SUCCESS, payload: id})
        getAllAdmins(dispatch)
    } catch (err) {
        dispatch({type : DELETE_ADMIN_FAIL, payload : err})
        // console.log(err)
    }
}
// this is the syntax to get milliseconds ----->>> 
//  Date.now(new Date('2 jan'))