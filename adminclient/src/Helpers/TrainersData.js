import TrainersActions from "../Components/Actions/TrainersActions";
export const TrainersData = (state) => {
  return state.trainersData.trainers
};

export const TrainersColumn = () => {
  return [
    { title: "Id", field: "trainer_id" },
    { title: "Trainer's Role", field: "trainer_will_train_for_role" },
    { title: "Trainers's own Role", field: "trainer_own_role" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <TrainersActions data={row}/>
        </div>
      ),
    },
  ];
}