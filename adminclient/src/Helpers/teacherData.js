import TeacherActions from '../Pages/TeacherActions'

export const TeacherData = (state) => {
  return state.teacherData.teachers.map(teacher => {
    return {
      Name: teacher.name,
      email: teacher.email,
      phone: teacher.primary_phone_number,
    }
  })
}
  

export const TeacherColumns = (withAction = false) => {
  const col = [
    { title: "NAME", field: "Name" },
    { title: "EMAIL", field: "email" },
    {
      title: "PHONE NO.",
      field: "phone",
    }]
  if (withAction) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <TeacherActions />
        </div>
      )
    })
    
    return col
  }
  return col
} 