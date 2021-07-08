import axios from '../axios'
import {GET_ALL_COURSES , GET_COURSE_SECTION_WITH_ID,  ADD_ADMIN_FAIL, ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, ADD_CLASSROOM_FAIL, ADD_CLASSROOM_REQUEST, ADD_CLASSROOM_SUCCESS, ADD_LECTURE_FAIL, ADD_LECTURE_REQUEST, ADD_LECTURE_SUCCESS, ADD_MEET_LINKS_FAIL, ADD_MEET_LINKS_REQUEST, ADD_MEET_LINKS_SUCCESS, ADD_MEET_LINK_FAIL, ADD_MEET_LINK_REQUEST, ADD_MEET_LINK_SUCCESS, ADD_STUDENT_FAIL, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_TEACHER_FAIL, ADD_TEACHER_REQUEST, ADD_TEACHER_SUCCESS, ADD_TRAINER_FAIL, ADD_TRAINER_REQUEST, ADD_TRAINER_SUCCESS, DELETE_ADMIN_FAIL, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, DELETE_CLASSROOM_FAIL, DELETE_CLASSROOM_REQUEST, DELETE_CLASSROOM_SUCCESS, DELETE_LECTURE_FAIL, DELETE_LECTURE_REQUEST, DELETE_LECTURE_SUCCESS, DELETE_MEET_LINK_FAIL, DELETE_MEET_LINK_REQUEST, DELETE_MEET_LINK_SUCCESS, DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, DELETE_TEACHER_FAIL, DELETE_TEACHER_REQUEST, DELETE_TEACHER_SUCCESS, DELETE_TRAINER_FAIL, DELETE_TRAINER_REQUEST, DELETE_TRAINER_SUCCESS, EDIT_ADMIN_FAIL, EDIT_ADMIN_REQUEST, EDIT_ADMIN_SUCCESS, EDIT_CLASSROOM_FAIL, EDIT_CLASSROOM_REQUEST, EDIT_CLASSROOM_SUCCESS, EDIT_LECTURE_FAIL, EDIT_LECTURE_REQUEST, EDIT_LECTURE_SUCCESS, EDIT_MEET_LINK_FAIL, EDIT_MEET_LINK_REQUEST, EDIT_MEET_LINK_SUCCESS, EDIT_STUDENT_FAIL, EDIT_STUDENT_REQUEST, EDIT_STUDENT_SUCCESS, EDIT_TEACHER_FAIL, EDIT_TEACHER_REQUEST, EDIT_TEACHER_SUCCESS, EDIT_TRAINER_FAIL, EDIT_TRAINER_REQUEST, EDIT_TRAINER_SUCCESS, GET_ALL_ADMINS_FAIL, GET_ALL_ADMINS_REQUEST, GET_ALL_ADMINS_SUCCESS, GET_ALL_CLASSROOMS_FAIL, GET_ALL_CLASSROOMS_REQUEST, GET_ALL_CLASSROOMS_SUCCESS, GET_ALL_COURSES_FAIL, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_ALL_LECTURES_FAIL, GET_ALL_LECTURES_REQUEST, GET_ALL_LECTURES_SUCCESS, GET_ALL_MEET_LINKS_FAIL, GET_ALL_MEET_LINKS_REQUEST, GET_ALL_MEET_LINKS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENT_COURSES_FAIL, GET_ALL_STUDENT_COURSES_REQUEST, GET_ALL_STUDENT_COURSES_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS, GET_ALL_TRAINERS_FAIL, GET_ALL_TRAINERS_REQUEST, GET_ALL_TRAINERS_SUCCESS, GET_EDIT_ADMIN_FAIL, GET_EDIT_ADMIN_SUCCESS, GET_EDIT_CLASSROOM_FAIL, GET_EDIT_CLASSROOM_SUCCESS, GET_EDIT_STUDENT_FAIL, GET_EDIT_STUDENT_SUCCESS, GET_EDIT_TEACHER_FAIL, GET_EDIT_TEACHER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionsType';


// export const mobileView= (flag)=>{
//     return {
//         type: "setMobileView",
//         payload:flag
//     }
// }

//Courses

export const getAllCourses = (dispatch)=>{
    return new Promise((resolve, reject) => {
        axios.get(`/courses/all`)
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_ALL_COURSES,
                    payload: response.data,
                });
                console.log(response);
                resolve(response.data);
                })
            .catch((error) => {
                reject(error);
            });
    })
};

export const getCourseSectionWithId = (dispatch , course_id , section_id )=>{
    console.log(course_id , section_id);
    return new Promise((resolve, reject) => {
        axios.get(`/course/${course_id}/section/details/${section_id}`) 
            .then((response) => {
                console.log('getCourseSectionWithId',response);
                resolve(response.data);
                })
            .catch((error) => {
                reject(error);
            });
    })
};

export const editCourseSectionOfCourse = (dispatch , course_id , section_id , body)=>{
    console.log('In action------------->body' , body);
    return new Promise((resolve, reject) => {
        axios.put(`/course/${course_id}/section/update/${section_id}`,body)      
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_COURSE_SECTION_WITH_ID,
                    payload: response.data,
                });
                resolve(response.data);
                })
            .catch((error) => {
                reject(error);
            });
    })
};

export const getAllClassrooms = async (dispatch) => {
    try {
        dispatch ({ type: GET_ALL_CLASSROOMS_REQUEST })
        const res = await axios.get('classrooms/all')
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
        console.log("data accessed",data)
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

export const addTeacher = async (dispatch,data,value) => {
    try {
        dispatch ({ type: ADD_TEACHER_REQUEST})
        console.log(data)
        const res = await axios.post('teacher/new',data)
        console.log(res)
        dispatch({type : ADD_TEACHER_SUCCESS, payload : data})
        // addTeacherToCourse(value,res._id)
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
        await axios.put(`/teacher/update/${id}`, data)
        dispatch({type : EDIT_TEACHER_SUCCESS, payload : data})
        getAllTeachers(dispatch)
    } catch (err) {
        dispatch({type : EDIT_TEACHER_FAIL, payload : err})
    }
}

export const deleteTeacher= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_TEACHER_REQUEST })
        await axios.delete(`/teacher/delete/${id}`)
        dispatch({type : DELETE_TEACHER_SUCCESS, payload: id})
        getAllTeachers(dispatch)
    } catch (err) {
        dispatch({type : DELETE_TEACHER_FAIL, payload : err})
        // console.log(err)
    }
}

export const addTeacherToCourse= () => {
    const res = axios.post()
}
// *****************LECTURES*****************

export const getAllLectures = async (dispatch,cid) => {
    try {
        dispatch({ type: GET_ALL_LECTURES_REQUEST})
        const res = await axios.get(`classroom/${cid}/lecture/all`)
        console.log(res.data)
        dispatch({type : GET_ALL_LECTURES_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_LECTURES_FAIL, payload : err})
    }
}


export const addLecture = async (dispatch,data,cid) => {
    try {
        dispatch ({ type: ADD_LECTURE_REQUEST})
        await axios.post(`/classroom/${cid}/lecture/new`,data)
        console.log(data)
        dispatch({type : ADD_LECTURE_SUCCESS, payload : data})
        getAllLectures(dispatch,cid)
    } catch (err) {
        dispatch({type : ADD_LECTURE_FAIL, payload : err})
    }
}

export const editLecture = async (dispatch, data,cid,id) => {
    try{
        dispatch ({ type: EDIT_LECTURE_REQUEST })
        await axios.put(`/classroom/${cid}/lecture/${id}`, data)
        dispatch({type : EDIT_LECTURE_SUCCESS, payload : data})
        getAllLectures(dispatch,cid)
    } catch (err) {
        dispatch({type : EDIT_LECTURE_FAIL, payload : err})
    }
}

export const deleteLecture= async (dispatch, cid, id) => {
    try{
        dispatch ({ type: DELETE_LECTURE_REQUEST })
        await axios.delete(`/classroom/${cid}/lecture/${id}`)
        dispatch({type : DELETE_LECTURE_SUCCESS, payload: id})
        getAllLectures(dispatch,cid)
    } catch (err) {
        dispatch({type : DELETE_LECTURE_FAIL, payload : err})
        // console.log(err)
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

export const editAdmin = async (dispatch, data) => {
    try{
        dispatch ({ type: EDIT_ADMIN_REQUEST })
        await axios.put(`/admin/update/details`, data)
        dispatch({type : EDIT_ADMIN_SUCCESS, payload : data})
        getAllAdmins(dispatch)
    } catch (err) {
        dispatch({type : EDIT_ADMIN_FAIL, payload : err})
    }
}

export const deleteAdmin= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_ADMIN_REQUEST})
        await axios.delete(`/admin/delete/${id}`)
        dispatch({type : DELETE_ADMIN_SUCCESS, payload: id})
        getAllAdmins(dispatch)
    } catch (err) {
        dispatch({type : DELETE_ADMIN_FAIL, payload : err})
        // console.log(err)
    }
}

// *****************STUDENT_COURSES*****************
export const getAllStudentCourses = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_STUDENT_COURSES_REQUEST })
        const res = await axios.get('/student/courses/all')
        console.log(res.data)
        dispatch({type : GET_ALL_STUDENT_COURSES_SUCCESS, payload : res.data})
    } catch (err) {
        dispatch({type : GET_ALL_STUDENT_COURSES_FAIL, payload : err})
    }
}

//*****************STUDENT_COURSES*****************
export const getAllMeetLinks = async (dispatch) => {
    try{
        dispatch({ type: GET_ALL_MEET_LINKS_REQUEST })
        const res = await axios.get('/meet_link/all')
        console.log(res.data)
        dispatch({type : GET_ALL_MEET_LINKS_SUCCESS, payload : res.data}) 
    } catch (err) {
        dispatch({type : GET_ALL_MEET_LINKS_FAIL, payload : err})
    }
}

export const addMeetLink = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_MEET_LINK_REQUEST})
        console.log(data)
        const res = await axios.post('meet_link/new',data)
        console.log(res)
        dispatch({type : ADD_MEET_LINK_SUCCESS, payload : data})
        getAllMeetLinks(dispatch)
    } catch (err) {
        dispatch({type : ADD_MEET_LINK_FAIL, payload : err})
    }
}

export const editMeetLink = async (dispatch, data,id) => {
    try{
        dispatch ({ type: EDIT_MEET_LINK_REQUEST })
        await axios.put(`/meet_link/update/${id}`, data)
        dispatch({type : EDIT_MEET_LINK_SUCCESS, payload : data})
        getAllMeetLinks(dispatch)
    } catch (err) {
        dispatch({type : EDIT_MEET_LINK_FAIL, payload : err})
    }
}

export const deleteMeetLink= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_MEET_LINK_REQUEST})
        await axios.delete(`/meet_link/delete/${id}`)
        dispatch({type : DELETE_MEET_LINK_SUCCESS, payload: id})
        getAllMeetLinks(dispatch)
    } catch (err) {
        dispatch({type : DELETE_MEET_LINK_FAIL, payload : err})
        // console.log(err)
    }
}
export const getAllCourses = async (dispatch) => {
    try{
        dispatch ({ type: GET_ALL_COURSES_REQUEST})
        const res = await axios.get(`/courses/all`)
        console.log(res)
        dispatch({type : GET_ALL_COURSES_SUCCESS, payload: res.data})
        // getAllMeetLinks(dispatch)
        return res.data
    } catch (err) {
        dispatch({type : GET_ALL_COURSES_FAIL, payload : err})
        console.log(err)
    }  
}
//*****************TRAINERS*****************
export const getAllTrainers = async (dispatch) => {
    try{
        dispatch ({ type: GET_ALL_TRAINERS_REQUEST})
        const res = await axios.get(`/trainers/all`)
        console.log(res)
        dispatch({type : GET_ALL_TRAINERS_SUCCESS, payload: res.data})
        // getAllMeetLinks(dispatch)
        return res.data
    } catch (err) {
        dispatch({type : GET_ALL_TRAINERS_FAIL, payload : err})
        console.log(err)
    }  
}

export const addTrainer = async (dispatch,data) => {
    try {
        dispatch ({ type: ADD_TRAINER_REQUEST})
        console.log(data)
        await axios.post('trainer/new',data)
        console.log(data)
        dispatch({type : ADD_TRAINER_SUCCESS, payload : data})
        getAllTrainers(dispatch)
    } catch (err) {
        dispatch({type : ADD_TRAINER_FAIL, payload : err})
    }
}

export const editTrainer = async (dispatch, data,id) => {
    try{
        dispatch ({ type: EDIT_TRAINER_REQUEST })
        await axios.put(`/trainer/update/${id}`, data)
        dispatch({type : EDIT_TRAINER_SUCCESS, payload : data})
        getAllTrainers(dispatch)
    } catch (err) {
        dispatch({type : EDIT_TRAINER_FAIL, payload : err})
    }
}

export const deleteTrainer= async (dispatch, id) => {
    try{
        dispatch ({ type: DELETE_TRAINER_REQUEST})
        await axios.delete(`/trainer/delete/${id}`)
        dispatch({type : DELETE_TRAINER_SUCCESS, payload: id})
        getAllTrainers(dispatch)
    } catch (err) {
        dispatch({type : DELETE_TRAINER_FAIL, payload : err})
        // console.log(err)
    }
}

export const Auth = async(dispatch,data) => {
    // var data ={
    //     email: "khushhh@mail",
    //     password: "khush1008"
    // }
    dispatch({ type: LOGIN_REQUEST })
    try {
        const res = await axios.post('admin/login',data)
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("role",res.data.role)

        console.log(res.data)
        dispatch({ type: LOGIN_SUCCESS , payload : res.data})
    } catch (err) {
        dispatch({ type: LOGIN_FAIL , payload : err})
    }
}
// this is the syntax to get milliseconds ----->>> 
//  Date.now(new Date('2 jan'))