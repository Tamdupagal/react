import MeetActions from "../Components/Actions/MeetActions";
export const MeetData = (state) => {
  return state.meetLinksData.meetLinks
};
export const MeetColumns = (handleEditClose, handleEditOpen) => {
  // console.log(handleEditOpen)
  return [
    { title: "Link", field: "link" },
    { title: "Link Id", field: "_id" },
    { title: "Bookings", field: "Bookings" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <MeetActions handleEditClose={handleEditClose} handleEditOpen={handleEditOpen} data={row}/>
        </div> 
      ),
    },
  ];
};
