import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Button, Container } from "@material-ui/core";
import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { attendanceData } from "../Helpers/attendanceData";

const OneToOne = () => {
  const history = useHistory();
  const [data, setData] = useState()
  useEffect(() => {
    setData(attendanceData);  
   }, [])

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
        />
      </Container>
    </div>
  );
};

export default OneToOne;
