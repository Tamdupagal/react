import LectureActions from "./../Components/Actions/LectureActions"
export const LectureData = (state) => {
  return state.lectureData.lectures
};

export const LectureColumn = (withActions=false) => {
  const col = [
    { title: "Time", field: "data_and_time",render: (row) => (<div>{new Date(row.date_and_time).toLocaleString()}</div>)
     },
    { title: "Meet Link", field: "crm_meeting_link" },
    { title: "Status", field: "status",},
  ];
  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <LectureActions data={row} />
        </div>
      ),
    })
    return col
  }
  return col
}