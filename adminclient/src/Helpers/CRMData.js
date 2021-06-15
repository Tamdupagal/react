import TeacherTrainingActions from "./../Components/Actions/TeacherTrainingActions"

export const CRMData = () => {
  return [
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik Arjun",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
  ];
};

export const CrmColumn = () => {
  return (
  [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "User Roles", field: "userRoles" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <TeacherTrainingActions />
        </div>
      ),
    },
    ]
  )
}