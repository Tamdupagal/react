import MeetActions from "../Components/Actions/MeetActions";
export const MeetData = () => {
  return [
    {
      Link: "1",
      LinkId: "malik1234@gmail.com",
      Bookings: "All",
      userRoles: "All",
    },
  ];
};
export const MeetColumns = () => {
  return [
    { title: "Link", field: "Link" },
    { title: "Link Id", field: "LinkId" },
    { title: "Bookings", field: "Bookings" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <MeetActions />
        </div>
      ),
    },
  ];
};
