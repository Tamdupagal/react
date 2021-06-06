import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
// import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { attendanceData } from "../Helpers/attendanceData";

const Attendance = () => {
  const history = useHistory();
  const [data, setData]= useState();

  const handleAttendanceReport = () => {
    history.push("/attendance/report");
  };
  // const data = attendanceData;
  useEffect(() => {
   setData(attendanceData);  
  }, [])
  
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    {
      title: "Student",
      field: "student",
      Style: { border: "1px solid black" },
    },
    {
      title: "Lectures Completed",
      field: "LecturesComplete",
      // render: (row) => <div>Hello</div>,
    },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#17a2b8",
              padding: "2%",
              color: "white",
              fontSize: "small",
            }}
            onClick={handleAttendanceReport}
          >
            <CreateIcon /> View Attendance Report
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container>
        {" "}
        <MaterialTable
          title="Attendances"
          // attendanceData={data}
          data={data}
          columns={Columns}
          options={{
            exportButton: true,
            border: true,
            headerStyle: {
              border: "0.5px solid #ccc",
            },
            cellStyle: {
              border: "0.5px solid #ccc",
            },
          }}
          style={{ border: "0.5px solid #ccc" }}
        />
      </Container>
    </div>
  );
};

export default Attendance;
