import TeacherTrainingActions from "../Components/Actions/TeacherTrainingActions";

export const TeacherTrainingData = () => {
  return 
};

export const TeacherTrainingColumn = () => {
  const col = [
    { title: "Classroom Name", field: "classroomName" },
    { title: "Trainer Name", field: "TrainerName" },
    { title: "Trainees Name", field: "TraineesName" },
    { title: "Course", field: "Course" },
    { title: "Total meetings", field: "TotalMeet" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <TeacherTrainingActions />
        </div>
      ),
    },
  ];
  return col;
}