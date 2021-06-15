import  TeacherActions  from "./../Components/Actions/TeacherActions"
export const teacherData = () => {
  return [
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
    {
      Name: "Ashutosh",
      email: "ashu0987@gmail.com",
      phone: "9876543210",
    },
  ];
};

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