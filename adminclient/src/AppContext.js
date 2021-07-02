import React, {createContext,useReducer} from "react";
import _ from 'lodash';
import { ADD_ADMIN_SUCCESS, ADD_CLASSROOM_FAIL, ADD_CLASSROOM_SUCCESS, ADD_LECTURE_SUCCESS, ADD_STUDENT_SUCCESS, DELETE_CLASSROOM_FAIL, DELETE_CLASSROOM_REQUEST, DELETE_CLASSROOM_SUCCESS, EDIT_CLASSROOM_FAIL, EDIT_CLASSROOM_REQUEST, EDIT_CLASSROOM_SUCCESS, EDIT_LECTURE_FAIL, EDIT_LECTURE_REQUEST, EDIT_STUDENT_FAIL, EDIT_STUDENT_REQUEST, EDIT_STUDENT_SUCCESS, GET_ALL_ADMINS_FAIL, GET_ALL_ADMINS_REQUEST, GET_ALL_ADMINS_SUCCESS, GET_ALL_CLASSROOMS_FAIL, GET_ALL_CLASSROOMS_REQUEST, GET_ALL_CLASSROOMS_SUCCESS, GET_ALL_LECTURES_FAIL, GET_ALL_LECTURES_REQUEST, GET_ALL_LECTURES_SUCCESS, GET_ALL_MEET_LINKS_FAIL, GET_ALL_MEET_LINKS_REQUEST, GET_ALL_MEET_LINKS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_ALL_STUDENT_COURSES_FAIL, GET_ALL_STUDENT_COURSES_REQUEST, GET_ALL_STUDENT_COURSES_SUCCESS, GET_ALL_TEACHERS_FAIL, GET_ALL_TEACHERS_REQUEST, GET_ALL_TEACHERS_SUCCESS, GET_EDIT_ADMIN_FAIL, GET_EDIT_ADMIN_SUCCESS, GET_EDIT_CLASSROOM_FAIL, GET_EDIT_CLASSROOM_SUCCESS, GET_EDIT_STUDENT_FAIL, GET_EDIT_STUDENT_SUCCESS, GET_EDIT_TEACHER_FAIL, GET_EDIT_TEACHER_SUCCESS } from "./action/actionsType";

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
    meetLinksData:{
        meetLinks: [],
        isLoading: false,
        anyError: null
    }
}

const reducer = (state=initialState, {type, payload})=>{
    console.log(type);
    switch (type){

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