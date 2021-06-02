import React from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
// import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";

const Attendance = () => {
  const history = useHistory()
  const data = [
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "5",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "phy",
      teacher: "priya",
      student: "0",
      LecturesComplete: "2",
    },
    {
      DclassName: "phy",
      teacher: "isha",
      student: "0",
      LecturesComplete: "1",
    },
    {
      DclassName: "sci",
      teacher: "manisha",
      student: "0",
      LecturesComplete: "2",
    },
  ];
  
  const handleAttendanceReport = () =>{
    history.push("/attendance/report")
  }
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    { title: "Student", field: "student",Style: {border: "1px solid black"} },
    { title: "Lectures Completed", field: "LecturesComplete",render: (row) => <div>Hello</div> },
    {title: "Actions",field: "name",render: (row) => 
    <div>
        <Button variant="contained" style={{backgroundColor:"#17a2b8",padding:"2%",color:"white",fontSize:"small"}} 
        onClick={handleAttendanceReport}
        >
            <CreateIcon/> View Attendance Report
        </Button>
    </div>}
  ];
  return (
    <div>
      <Container>
        {" "}
        <MaterialTable
          title="Attendances"
          data={data}
          columns={Columns}
          options={{ exportButton: true,
            border: true,
            headerStyle: {
                // backgroundColor: "pink"
                border: "1px solid black"

            },
            cellStyle: {
                border: "1px solid black"
            }
          }}
        //   actions ={[
        //       {
                  
        //       }
        //   ]}
          style={{border: "1px solid black"}}
        />
      </Container>
    </div>
  );
};

export default Attendance;
