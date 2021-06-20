import StudentActions from "./../Pages/StudentActions"
export const StudentData = (state) => {
  return state.studentData.students
}

export const StudentColumn = (withActions=false) => {

  const col = [
    {
      title: "Name",
      field: "name",
    },
    { title: "Email", field: "email" },
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
  ]

  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <StudentActions data={row}/>
        </div>
      ),
    })
    return col
  }
  return col
}
