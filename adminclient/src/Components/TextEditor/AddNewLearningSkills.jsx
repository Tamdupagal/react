import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./../../Styles/AddCourseActivity";
import TextEditor from "./TextEditor";

function AddCourseActivity() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.Header}>Add New Learning Skills</Container>
      <TextEditor />
    </div>
  );
}
export default AddCourseActivity;
