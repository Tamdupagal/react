import React from "react";
import MaterialTable from "material-table";
import { Container } from "@material-ui/core";

const OneToOne = () => {
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
  const Columns = [
    { title: "Demo Lecture", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    { title: "Student", field: "student" },
    { title: "Lectures Completed", field: "LecturesComplete" },
  ];
  return (
    <div>
      <Container>
        {" "}
        <MaterialTable
          data={data}
          columns={Columns}
          options={{ exportButton: true }}
          editable={{
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                console.log(selectedRow);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </Container>
    </div>
  );
};

export default OneToOne;
