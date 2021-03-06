import React, {createContext,useReducer} from "react";
import _ from 'lodash';
import { GET_COURSE_SECTION_WITH_ID , GET_ALL_COURSES ,ADD_ADMIN_SUCCESS, ADD_CLASSROOM_SUCCESS, ADD_STUDENT_SUCCESS, EDIT_CLASSROOM_FAIL, EDIT_CLASSROOM_REQUEST, EDIT_LECTURE_FAIL, EDIT_LECTURE_REQUEST, EDIT_STUDENT_FAIL, EDIT_STUDENT_REQUEST, GET_ALL_ADMINS_FAIL, GET_ALL_ADMINS_REQUEST, GET_ALL_ADMINS_SUCCESS, GET_ALL_CLASSROOMS_FAIL, GET_ALL_CLASSROOMS_REQUEST, GET_ALL_CLASSROOMS_SUCCESS, GET_ALL_COURSES_FAIL, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_ALL_LECTURES_FAIL, GET_ALL_LECTURES_REQUEST, GET_ALL_LECTURES_SUCCESS, GET_ALL_MEET_LINKS_FAIL, GET_ALL_MEET_LINKS_REQUEST, GET_ALL_MEET_LINKS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENT_COURSES_FAIL, GET_ALL_STUDENT_COURSES_REQUEST, GET_ALL_STUDENT_COURSES_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS, GET_ALL_TRAINERS_FAIL, GET_ALL_TRAINERS_REQUEST, GET_ALL_TRAINERS_SUCCESS, GET_EDIT_ADMIN_FAIL, GET_EDIT_ADMIN_SUCCESS, GET_EDIT_CLASSROOM_FAIL, GET_EDIT_CLASSROOM_SUCCESS, GET_EDIT_STUDENT_FAIL, GET_EDIT_STUDENT_SUCCESS, GET_EDIT_TEACHER_FAIL, GET_EDIT_TEACHER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, GET_CLASSROOM_BY_ID_SUCCESS } from "./action/actionsType";

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
    classroomData: {
        classrooms: [],
        isLoading: false,
        anyError : null
    },
    classroomEditData: {
        data: [],
        isloading: false,
        anyError : null
    },
    studentEditData: {
        data: [],
        isloading: false,
        anyError : null
    },
    lectureData: {
        lectures: [],
        isloading: false,
        anyError : null
    },
    teacherEditData: {
        data: [],
        isloading: false,
        anyError : null
    },
    adminData: {
        admins: [],
        isloading: false,
        anyError: null 
    },
    adminEditData: {
        data:[],
        isLoading: false,
        anyError: null
    },
    studentCoursesData:{
        studentCourses: [],
        isLoading: false,
        anyError: null
    },
    courseData: {
        courses: [],
        course_section_with_id: null
    },
    meetLinksData:{
        meetLinks: [],
        isLoading: false,
        anyError: null
    },
    // coursesData:{
    //     courses: [],
    //     isLoading: false,
    //     anyError: null
    // },
    trainersData: {
        trainers: [],
        isLoading: false,
        anyError: null
    },
    loginToken: {
        isLoading: false,
        token : [],
        anyError: null
    },
    classroomDataById:{
        classroom: []
    }
}

const reducer = (state=initialState, {type, payload})=>{
    switch (type){
        case GET_ALL_COURSES:
            return {
                ...state , courseData: { ...state.courseData , courses: payload}
            }

        case GET_COURSE_SECTION_WITH_ID:
            return {
                ...state , courseData: {...state.courseData , course_section_with_id: payload}
            }
        
        case GET_ALL_STUDENTS_REQUEST:
            return ({ ...state, studentData: { ...state.studentData, isLoading: true } })
        case GET_ALL_STUDENTS_SUCCESS:
            return ({ ...state, studentData: { ...state.studentData, students: payload, isLoading: false}})
        case GET_ALL_STUDENTS_FAIL:
            return ({ ...state, studentData: { ...state.studentData, anyError: payload, isLoading: false } })

        case GET_ALL_CLASSROOMS_REQUEST:
            return ({ ...state, classroomData: { ...state.classroomData, isLoading: true } })
        case GET_ALL_CLASSROOMS_SUCCESS:
            return ({ ...state, classroomData: { ...state.classroomData, classrooms: payload, isLoading: false}})
        case GET_ALL_CLASSROOMS_FAIL:
            return ({ ...state, classroomData: { ...state.classroomData, anyError: payload, isLoading: false}})

        case GET_CLASSROOM_BY_ID_SUCCESS:
            return ({ ...state, classroomDataById: { ...state.classroomDataById, classroom: payload}})

        case GET_EDIT_CLASSROOM_SUCCESS:
            return ({ ...state, classroomEditData: { ...state.classroomEditData, data: payload, isLoading: false}})
        case GET_EDIT_CLASSROOM_FAIL:
            return ({ ...state, classroomEditData: { ...state.classroomEditData, anyError: payload, isLoading: false}})    

        case ADD_CLASSROOM_SUCCESS:
            return ({ ...state, classrooms: { ...state.classroomData.classrooms.concat(payload)}})
        // case ADD_CLASSROOM_FAIL:
        //     return ({ ...state, classroomData: { ...state.classroomData, anyError: payload, isLoading: false}})

        case EDIT_CLASSROOM_REQUEST:
            return ({ ...state, classroomData: { ...state.classroomData, isLoading: true } })
        // case EDIT_CLASSROOM_SUCCESS:
        //     return ({ ...state, classroomData: {
        //         ...state.classroomData.classrooms.map((content,i)=> content.id == payload.id ? {...content, 
        //             name: payload.name,
        //             classroom_type: payload.classroom_type,
        //             enrolled_courses: payload.enrolledCourses,
        //             enrolled_students : payload.enrolledStudents,
        //             status: payload.status
        //             } : content)
        //     }})
        case EDIT_CLASSROOM_FAIL:
            return ({ ...state, classroomData: { ...state.classroomData, anyError: payload, isLoading: false}})


        // case DELETE_CLASSROOM_REQUEST:
        //     return ({ ...state, classroomData: { ...state.classroomData, isLoading: true } })
        // case DELETE_CLASSROOM_SUCCESS:
        //     return ({ ...state, classroomData: { ...state.classroomData , isLoading: false}})
        // case DELETE_CLASSROOM_FAIL:
        //     return ({ ...state, classroomData: { ...state.classroomData, anyError: payload, isLoading: false}})

        case ADD_STUDENT_SUCCESS:
            return ({ ...state, students: { ...state.studentData.students.concat(payload)}})

        case GET_EDIT_STUDENT_SUCCESS:
            return ({ ...state, studentEditData: { ...state.studentEditData, data: payload, isLoading: false}})
        case GET_EDIT_STUDENT_FAIL:
            return ({ ...state, studentEditData: { ...state.studentEditData, anyError: payload, isLoading: false}})    

        case EDIT_STUDENT_REQUEST:
            return ({ ...state, studentData: { ...state.studentData, isLoading: true } })
        // case EDIT_STUDENT_SUCCESS:
        //     return ({ ...state, studentData: {
        //         ...state.studentData.students.map((content,i)=> content.id == payload.id ? {...content, 
        //             name: payload.name,
        //             student_type: payload.student_type,
        //             enrolled_courses: payload.enrolledCourses,
        //             enrolled_students : payload.enrolledStudents,
        //             status: payload.status
        //             } : content)
        //     }})
        case EDIT_STUDENT_FAIL:
            return ({ ...state, studentData: { ...state.studentData, anyError: payload, isLoading: false}})

        case GET_ALL_TEACHERS_REQUEST:
            return ({ ...state, teacherData: { ...state.teacherData, isLoading: true } })
        case GET_ALL_TEACHERS_SUCCESS:
            return ({ ...state, teacherData: { ...state.teacherData, teachers: payload, isLoading: false}})
        case GET_ALL_TEACHERS_FAIL:
            return ({ ...state, teacherData: { ...state.teacherData, anyError: payload, isLoading: false}})

        // case ADD_LECTURE_SUCCESS:
        //     return ({ ...state, lectures: { ...state.lectureData.lectures.concat(payload)}})
        
        case GET_EDIT_TEACHER_SUCCESS:
            return ({ ...state, teacherEditData: { ...state.teacherEditData, data: payload, isLoading: false}})
        case GET_EDIT_TEACHER_FAIL:
            return ({ ...state, teacherEditData: { ...state.teacherEditData, anyError: payload, isLoading: false}})    

        case GET_ALL_ADMINS_REQUEST:
            return ({ ...state, adminData: { ...state.adminData, isLoading: true } })
        case GET_ALL_ADMINS_SUCCESS:
            return ({ ...state, adminData: { ...state.adminData, admins: payload, isLoading: false}})
        case GET_ALL_ADMINS_FAIL:
            return ({ ...state, adminData: { ...state.adminData, anyError: payload, isLoading: false } })

        case ADD_ADMIN_SUCCESS:
            return ({ ...state, admins: { ...state.adminData.admins.concat(payload)}})

        case GET_EDIT_ADMIN_SUCCESS:
            return ({ ...state, adminEditData: { ...state.adminEditData, data: payload, isLoading: false}})
        case GET_EDIT_ADMIN_FAIL:
            return ({ ...state, adminEditData: { ...state.adminEditData, anyError: payload, isLoading: false}})  

        case GET_ALL_LECTURES_REQUEST:
            return ({ ...state, lectureData: { ...state.lectureData, isLoading: true } })
        case GET_ALL_LECTURES_SUCCESS:
            return ({ ...state, lectureData: { ...state.lectureData, lectures: payload, isLoading: false}})
        case GET_ALL_LECTURES_FAIL:
            return ({ ...state, lectureData: { ...state.lectureData, anyError: payload, isLoading: false}})
        case EDIT_LECTURE_REQUEST:
            return ({ ...state, lectureData: { ...state.lectureData, isLoading: true } })
        // case EDIT_STUDENT_SUCCESS:
        //     return ({ ...state, studentData: {
        //         ...state.studentData.students.map((content,i)=> content.id == payload.id ? {...content, 
        //             name: payload.name,
        //             student_type: payload.student_type,
        //             enrolled_courses: payload.enrolledCourses,
        //             enrolled_students : payload.enrolledStudents,
        //             status: payload.status
        //             } : content)
        //     }})
        case EDIT_LECTURE_FAIL:
            return ({ ...state, lectureData: { ...state.lectureData, anyError: payload, isLoading: false}})   
        default:
            return state;
        // case "setMobileView":
        //     return {...state, mobileView: action.payload};
        // case "isAuth":
        //     return {...state, auth:{ isSignedIn: action.payload.flag, user: action.payload.user}};
        // default:
        //     return {...state};


        case GET_ALL_STUDENT_COURSES_REQUEST:
            return ({ ...state, studentCoursesData: { ...state.studentCoursesData, isLoading: true } })
        case GET_ALL_STUDENT_COURSES_SUCCESS:
            return ({ ...state, studentCoursesData: { ...state.studentCoursesData, studentCourses: payload, isLoading: false}})
        case GET_ALL_STUDENT_COURSES_FAIL:
            return ({ ...state, studentCoursesData: { ...state.studentCoursesData, anyError: payload, isLoading: false } })

        case GET_ALL_MEET_LINKS_REQUEST:
            return ({ ...state, meetLinksData: { ...state.meetLinksData, isLoading: true } })
        case GET_ALL_MEET_LINKS_SUCCESS:
            return ({ ...state, meetLinksData: { ...state.meetLinksData, meetLinks: payload, isLoading: false}})
        case GET_ALL_MEET_LINKS_FAIL:
            return ({ ...state, meetLinksData: { ...state.meetLinksData, anyError: payload, isLoading: false } })

        case GET_ALL_COURSES_REQUEST:
            return ({ ...state, coursesData: { ...state.coursesData, isLoading: true } })
        case GET_ALL_COURSES_SUCCESS:
            return ({ ...state, coursesData: { ...state.coursesData, courses: payload, isLoading: false}})
        case GET_ALL_COURSES_FAIL:
            return ({ ...state, coursesData: { ...state.coursesData, anyError: payload, isLoading: false } })

        case GET_ALL_TRAINERS_REQUEST:
            return ({ ...state, trainersData: { ...state.trainersData, isLoading: true } })
        case GET_ALL_TRAINERS_SUCCESS:
            return ({ ...state, trainersData: { ...state.trainersData, trainers: payload, isLoading: false}})
        case GET_ALL_TRAINERS_FAIL:
            return ({ ...state, trainersData: { ...state.trainersData, anyError: payload, isLoading: false } })

        case LOGIN_REQUEST:
            return ({ ...state, loginToken: { ...state.loginToken, isLoading: true}})
        case LOGIN_SUCCESS:
            return ({ ...state, loginToken: { ...state.loginToken, token: payload, isLoading: false}})
        case LOGIN_FAIL:
            return ({ ...state, loginToken: { ...state.loginToken, anyError: payload, isLoading: false}})
            
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