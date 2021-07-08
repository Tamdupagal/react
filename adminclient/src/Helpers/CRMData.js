<<<<<<< HEAD
import TeacherTrainingActions from '../Pages/TeacherTrainingActions'

=======
import TeacherTrainingActions from "./../Components/Actions/TeacherTrainingActions";
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a

export const CRMData = () => {
  return [
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
    {
      name: "Malik",
      email: "malik1234@gmail.com",
      userRoles: "All",
    },
  ];
};

export const CrmColumn = () => {
<<<<<<< HEAD
  return (
  [
=======
  return [
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
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
<<<<<<< HEAD
    ]
  )
}
=======
  ];
};
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a
