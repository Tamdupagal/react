import AdminActions from "./../Components/Actions/AdminActions"
export const AdminData = (state) => {
  return state.adminData.admins
};

export const AdminColumn = (withActions=false) => {
  const col = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Role", field: "All",render: (row) =>(
      <div>All</div>
    ) },
  ];
  if (withActions) {
    col.push({
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <AdminActions data={row} />
        </div>
      ),
    })
    return col
  }
  return col
}