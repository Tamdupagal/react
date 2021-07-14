import AttendanceReportActions from "./../Components/Actions/AttendanceReportActions"
export const AttendanceData = () => {
    const Data = [
        {
            name: "yash",
            present: "0",
            absent: '1',
        },
        {
            name: "yash",
            present: "0",
            absent: '1',
        }
    ]
    return Data;
}

export const AttendanceColumn = () => {
    
    const Column = [
            {
                title:"Student",field:"name"
            },
            { title: "Present", field: "present" },
            { title: "Absent", field: "absent" },
            {title: "Actions",
          field: "name",
          render: (row) => (
            <div>
              <AttendanceReportActions data={row} />
            </div>
          ),}
        ]
        return Column;
}
