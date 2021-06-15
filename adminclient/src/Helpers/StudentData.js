import StudentActions from "./../Pages/StudentActions"
export const StudentData = () => {
  return [
    {
      name: "john",
      email: "john1234@gmail.com",
      parentName: "jolly",
      parentPhoneNo: "9876543210",
      status: "last seen : 1 minute ago.",
    },
    {
      name: "john",
      email: "john1234@gmail.com",
      parentName: "jolly",
      parentPhoneNo: "9876543210",
      status: "last seen : 1 minute ago.",
    },
    {
      name: "john",
      email: "john1234@gmail.com",
      parentName: "jolly",
      parentPhoneNo: "9876543210",
      status: "last seen : 1 minute ago.",
    },
    {
      name: "john",
      email: "john1234@gmail.com",
      parentName: "jolly",
      parentPhoneNo: "9876543210",
      status: "last seen : 1 minute ago.",
    },
  ];
};

export const StudentColumn = (withActions=false) => {

  const col = [
    {
      title: "Name",
      field: "name",
    },
    { title: "Email", field: "email" },
    { title: "Parent Name", field: "parentName" },
    {
      title: "Parent's Email",
      field: "parentEmail",
    },
    { title: "Status", field: "status" }
  ]

  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: () => (
        <div>
          <StudentActions />
        </div>
      ),
    })
    return col
  }
  return col
}
