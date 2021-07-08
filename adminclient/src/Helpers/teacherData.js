<<<<<<< HEAD
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
=======
import TeacherActions from "./../Components/Actions/TeacherActions";
export const teacherData = (state) => {
  return state.teacherData.teachers;
};

export const teacherColumn = (withAction = false) => {
  const col = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    {
      title: "Phone No.",
      field: "primary_phone_number",
    },
  ];
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
  if (withAction) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
<<<<<<< HEAD
          <TeacherActions />
        </div>
      )
    })
    
    return col
  }
  return col
} 
=======
          <TeacherActions data={row} />
        </div>
      ),
    });

    return col;
  }
  return col;
};
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
