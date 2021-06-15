import React from "react";
import { Container, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./../Styles/AddStudent";
import ImportExcel from "../Components/Students/ImportExcel";
import StudentsInfo from "../Components/Students/StudentsInfo";

const AddStudent = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Container>
          <div>
            <h1 className={classes.mainHeading}> Add a Student</h1>
          </div>
          <div className={classes.excelFile}>
            <Divider className={classes.dividerInset} />
            <h3 className={classes.subheading1}>IMPORT AN EXCEL FILE</h3>
          </div>
          <ImportExcel />
          <StudentsInfo />
        </Container>
      </Container>
    </div>
  );
};
export default AddStudent;
