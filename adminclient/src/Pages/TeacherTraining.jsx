import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container } from "@material-ui/core";
import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { attendanceData } from "../Helpers/attendanceData";
import { TeacherTrainingData } from "../Helpers/TeacherTrainingData.js";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaeb !important" } },
});

const TeacherTraining = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  useEffect(() => {
    setData(TeacherTrainingData);
  }, []);

  const Columns = [
    { title: "Classroom Name", field: "classroomName" },
    { title: "Trainer Name", field: "TrainerName" },
    { title: "Trainees Name", field: "TraineesName" },
    { title: "Course", field: "Course" },
    { title: "Total meetings", field: "TotalMeet" },
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
      <div>
        <Container>
          <Container
            style={{
              border: "1px solid #e6e6ff",
              borderBottom: "white",
              backgroundColor: "white",
              padding: "1%",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="secondary"
                // onClick={handleAddNewClassroom}
              >
                Add new Classroom
              </Button>
            </Box>
          </Container>
        </Container>
        <Container>
          {" "}
          <MaterialTable
            title="Classrooms"
            data={data}
            columns={Columns}
            style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
            options={{
              exportButton: true,
              headerStyle: {
                border: "0.5px solid 	 #e6e6ff",
                backgroundColor: "#ba6f6a",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "800",
                fontFamily: "KoHo, sans-serif",
                letterSpacing: "0.07rem",
              },
              cellStyle: {
                border: "0.5px solid white",
              },
              rowStyle: (rowData) => ({
                backgroundColor:
                  rowData.tableData.id % 2 === 0 ? "#FFF" : "#fae2e1",
                fontWeight: "600",
                fontSize: "1rem",
                maxWidth: "2vw",
                color: "#000",
                rowStyle: "	 #e6e6ff",
              }),
            }}
            components={{
              Row: (props) => (
                <MTableBodyRow className={classes.tableRow} {...props} />
              ),
            }}
          />
        </Container>
      </div>
    </div>
  );
};

export default TeacherTraining;
