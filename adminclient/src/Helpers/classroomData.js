import ClassroomActions from "./../Components/Actions/ClassroomActions"
// import courses from "./Courses";
export const classroomData = (state) => {
  return state.classroomData.classrooms
//   state.classroomData.classrooms.map(classroom => (
//     {
//       name: classroom.name,
//       classroom_type: classroom.classroom_type,
//       status: classroom.status,
//       id: classroom._id,
//       enrolledCourses : classroom.enrolled_courses,
//       enrolledStudents: classroom.enrolled_students
//   }
//   )
// )
// console.log(state.classroomData.classrooms)
};

export const classroomColumn = (withActions=false) => {

  const col = [
    { title: "Name", field: "name" },
    { title: "Type", field: "classroom_type" },
  ]

  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <ClassroomActions data={row} />
        </div>
      ),
    })
    return col
  }
  return col
}
