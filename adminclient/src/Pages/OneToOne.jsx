import React from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";

const OneToOne = () => {
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

  const handleAddNewClassroom = () => {
    history.push("/classroom/create");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    { title: "Student", field: "student" },
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
          <ClassroomActions />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container>
        {" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddNewClassroom}
        >
          Add new Classroom
        </Button>
        <MaterialTable
          title=""
          data={data}
          columns={Columns}
          options={{ exportButton: true }}
          // actions ={
          //   <Button>Hi</Button>
          // }
          // components={{
          //   Row: props => <CustomRow {...props} />
          // }}
        />
      </Container>
    </div>
  );
};

export default OneToOne;
