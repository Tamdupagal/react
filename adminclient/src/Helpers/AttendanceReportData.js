import AttendanceReportActions from "./../Components/Actions/AttendanceReportActions"
export const AttendanceData = (state,length) => {
    let classroom = state.classroomDataById.classroom
    let present=[]
    if(length)
    classroom.lectures?Object.values(classroom.lectures).forEach(c=>c.presentStudents?present.push({ present: Object.keys(c.presentStudents).length, absent: parseInt(length-Object.keys(c.presentStudents).length), id:c._id}):""):console.log("")
    // classroom.lectures?Object.values(classroom.lectures).forEach(c=>console.log(c.presentStudents?typeof Object.keys(c.presentStudents).length:"")):console.log("")
    // classroom.lectures?Object.values(classroom.lectures).forEach(c=>console.log(c.presentStudents?:"")):""
    console.log(typeof length)
    return present
}

export const AttendanceColumn = (length) => {
  
    const col = [
      { title: "Student", field: "", 
      render: () => (
        <div>
          {length}
        </div>
        )
       },
            { title: "Present", field: "present",typeof:"num"},
            { title: "Absent", field: "absent",typeof:"num"},
            {title: "Actions",
          field: "name",
          render: (row) => (
            <div>
              <AttendanceReportActions data={row} length={length} />
            </div>
          ),}
        ];
            return col;
}
