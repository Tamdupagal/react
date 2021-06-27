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
  if (withAction) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <TeacherActions data={row} />
        </div>
      ),
    });

    return col;
  }
  return col;
};
