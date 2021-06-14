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
}

export const StudentColumn = (withActions=false) => {

  const col = [
    {
      title: "Name",
      field: "name",
    },
    { title: "Email", field: "email" },
    { title: "Parent Name", field: "parentName" },
    {
      title: "Parent's Email",
      field: "parentEmail",
    },
    { title: "Status", field: "status" }
  ]

  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: () => (
        <div>
          <StudentActions />
        </div>
      ),
    })
    return col
  }
  return col
}
