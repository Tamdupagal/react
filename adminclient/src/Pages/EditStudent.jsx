import React from "react";
import { Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./../Styles/AddStudent";
import ImportExcel from "../Components/Students/ImportExcel";
import StudentsInfoEdit from "../Components/Students/StudentsInfoEdit";

const EditStudent = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Container>
          <div>
            <h1 className={classes.mainHeading}> Edit a Student</h1>
          </div>
          <StudentsInfoEdit />
        </Container>
      </Container>
    </div>
  );
};
export default EditStudent;
