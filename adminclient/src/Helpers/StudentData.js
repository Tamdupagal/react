<<<<<<< HEAD
import StudentActions from '../Pages/StudentActions'



export const StudentData = (state) => {
  return state.studentData.students.map(student => (
      {
        name: student.name,
        email: student.email,
        parentName: student.parent_name,
        parentEmail: student.parent_email,
        status: "last seen : 1 minute ago.",
    })
  )
=======
import StudentActions from "./../Pages/StudentActions"
export const StudentData = (state) => {
  return state.studentData.students
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
}

export const StudentColumn = (withActions=false) => {

  const col = [
    {
      title: "Name",
      field: "name",
    },
    { title: "Email", field: "email" },
<<<<<<< HEAD
    { title: "Parent Name", field: "parentName" },
    {
      title: "Parent's Email",
      field: "parentEmail",
    },
    { title: "Status", field: "status" }
=======
    { title: "Parent Name", field: "parent_name" },
    {
      title: "Parent's Email",
      field: "parent_email",
    },
    { title: "Status", field: "active" },
    // {
    //   title: "Actions",
    //   field: "name",
    //   render: (row) => (
    //     <div>
    //       <StudentActions data={row} />
    //     </div>
    //   ),
    // }
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
  ]

  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
<<<<<<< HEAD
      render: () => (
        <div>
          <StudentActions />
=======
      render: (row) => (
        <div>
          <StudentActions data={row}/>
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
        </div>
      ),
    })
    return col
  }
  return col
}
