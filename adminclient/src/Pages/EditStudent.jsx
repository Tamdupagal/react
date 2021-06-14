import React from "react";
import { Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {useStyles} from "./../Styles/AddStudent"
import ImportExcel from "../Components/Students/ImportExcel";
import StudentsInfo from "../Components/Students/StudentsInfo";

const EditStudent = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Container>
          <div>
            <h1 className={classes.mainHeading}> Edit a Student</h1>
          </div>
          <StudentsInfo/>
        </Container>
      </Container>
    </div>
  );
};
export default EditStudent;