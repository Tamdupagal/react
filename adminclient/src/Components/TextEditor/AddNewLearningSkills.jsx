import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../Courses/AddCourse.css";
import { Container, Button } from "@material-ui/core";
import "./TextEditor.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import formats from"./../../Helpers/formats"
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import modules from "./../../Helpers/modules"
import useStyles from "../../Styles/textEditor"

function AddNewLearningSkills() {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // upload(e) {
  //   console.warn(e.target.file)
  // }

  return (
    <div>
      <Container className={classes.Header}>Add New Learning Skill </Container>

      <Container className={classes.borderbox1}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <Paper className={classes.paper1}>
              <Divider className={classes.dividerInset} />
              <h3 className={classes.addContent}>ADD CONTENT</h3>
              {/* <MainEditor
                editorState={editorState}
                className={classes.editor1}
                onEditorStateChange={setEditorState}
                toolbarClassName="toolbar"
                wrapperClassName="wrapper"
                editorClassName="editor"
              /> */}
              <div className="editor__wrapper">
                <ReactQuill
                  className="toolBar"
                  theme="snow"
                  placeholder="Add Content here..."
                  formats={formats}
                  modules={modules}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.submitBtn}>
              <Button variant="contained" color="secondary">
                SUBMIT STUDENT
              </Button>
            </div>
          </Paper>
        </Grid>
        <Divider className={classes.endDivider} />
      </Container>
    </div>
  );
}
export default AddNewLearningSkills;

{
  /* <Container className={classes.borderbox}>
  <Container className={classes.Header}>Add New Learning Skill </Container>
  <Grid className={classes.borderbox1}>
    <div className="editor__wrapper">
      <h1 className="editor__title">Add Content</h1>
      <Grid item className={classes.editor1}>
        <MainEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName="toolbar"
          wrapperClassName="wrapper"
          editorClassName="editor"
        />
      </Grid>
      <Grid item sm={6} md={3}>
        {" "}
        <Container>
          <h1>hello</h1>
        </Container>
      </Grid>
      <div className="btn__box">
        <button className="button1" type="button">
          Save Changes
        </button>
      </div>
    </div>
  </Grid>
</Container>; */
}
