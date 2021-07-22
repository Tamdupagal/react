
import { AttendanceActions } from "../Components/Actions/AttendanceActions";
// let studId = []

// const getStudents = (data) => {
//   // if(row.enrolled_students)
//   // console.log(Object.keys(row.enrolled_students).length, "Hi")
//   // else
//   // console.log("0")
//   // console.log(data)
// }

// const getTeacher = (row) => {
//   // row.enrolled_students.forEach(c=>
//   //   {
//   //     console.log(c)
//   //   })
//   // let stuId = []
//   // stuId.push(Object.keys(row.enrolled_students))
//   // console.log(stuId)
//   // // return stuId
//   // stuId.forEach(c=>{
//   //   c.forEach(d=>{
//   //     return d
//   //   })
//   // })
//   // console.log(row)
//   // row.forEach(c=>{return c})
// }
export const AttendanceData = (state) => {
  return state.classroomData.classrooms
};

export const AttendanceColumn = () => {
  const col = [
    { title: "Classroom", field: "name" },
    { title: "Lecture On", field: "teachers", render: (row) => (
      <div>
        {/* {row.teachers?Object.values(row.teachers).map(c=>c.personelDetails!=null?c.personelDetails.map(data=>console.log(data)):""): ""} */}
        {/* {row.teachers?Object.values(row.teachers).map(c=>console.log(c.personelDetails.name)): ""} */}
        name
      </div>
      ) },
    {
      title: "Total",
      field: "total", render: (row) => (
        <div>
          {row.enrolled_students?Object.keys(row.enrolled_students).length: ""}
        </div>
      )
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
        <AttendanceActions data={row}/>
      ),
    },
  ];
  return col
}

