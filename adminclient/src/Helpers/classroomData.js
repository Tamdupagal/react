import ClassroomActions from "./../Components/Actions/ClassroomActions"
export const classroomData = (state) => {
  return state.classroomData.classrooms.map(classroom => (
    {
      name: classroom.name,
      classroom_type: classroom.classroom_type,
  })
)
// console.log(state.classroomData)
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
          {/* {row} */}
          <ClassroomActions data={row} />
        </div>
      ),
    })
    return col
  }
  return col
}
