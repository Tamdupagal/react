import React from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
// import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";

const StudentCourses = () => {
  const history = useHistory();
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

  const handleManageCourse = () => {
    history.push("/student-courses/manage");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    {
      title: "Student",
      field: "student",
      Style: { border: "0.5px solid #ccc" },
    },
    {
      title: "Lectures Completed",
      field: "LecturesComplete",
      render: (row) => <div>Hello</div>,
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
            onClick={handleManageCourse}
          >
            <CreateIcon /> Manage Student Course
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
          title="Students"
          data={data}
          columns={Columns}
          options={{
            exportButton: true,
            border: true,
            headerStyle: {
              // backgroundColor: "pink"
              border: "0.5px solid #ccc",
            },
            cellStyle: {
              border: "0.5px solid #ccc",
            },
          }}
          //   actions ={[
          //       {

          //       }
          //   ]}
          style={{ border: "0.5px solid #ccc" }}
        />
      </Container>
    </div>
  );
};

export default StudentCourses;
