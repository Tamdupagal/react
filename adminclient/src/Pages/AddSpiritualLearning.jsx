import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./../Styles/AddCourseActivity";
import TextEditor from "./../Components/TextEditor/TextEditor";

function AddCourseActivity() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.Header}>Add Spiritual Learning</Container>
      <TextEditor />
    </div>
  );
}
export default AddCourseActivity;
