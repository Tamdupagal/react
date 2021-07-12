import { keys } from "@material-ui/core/styles/createBreakpoints";
import { getTeacherById } from "../action/actions";
import { AttendanceActions } from "../Components/Actions/AttendanceActions";
// let studId = []

const getStudents = (data) => {
  // if(row.enrolled_students)
  // console.log(Object.keys(row.enrolled_students).length, "Hi")
  // else
  // console.log("0")
  // console.log(data)
}

const getTeacher = (row) => {
  // row.enrolled_students.forEach(c=>
  //   {
  //     console.log(c)
  //   })
  // let stuId = []
  // stuId.push(Object.keys(row.enrolled_students))
  // console.log(stuId)
  // // return stuId
  // stuId.forEach(c=>{
  //   c.forEach(d=>{
  //     return d
  //   })
  // })
  // console.log(row)
  // row.forEach(c=>{return c})
}
export const AttendanceData = (state) => {
  return state.classroomData.classrooms
};

export const AttendanceColumn = (dispatch) => {
  const col = [
    { title: "Classroom", field: "name" },
    { title: "Lecture On", field: "teachers", render: (row) => (
      <div>
        {Object.keys(row.teachers).forEach(c=>console.log(getTeacherById(dispatch,c)))}
      </div>
      ) },
    {
      title: "Total",
      field: "name", render: (row) => {
        <div>{getStudents(row)}</div>
      }
      // Style: { border: "1px solid black" },
    },
    // {
    //   title: "Absent",
    //   field: "absent",
    // },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <AttendanceActions/>
      ),
    },
  ];
  return col
}

