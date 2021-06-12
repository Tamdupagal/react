import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import "../../Styles/TextEditor.css";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useStyles } from "./../../Styles/AddCourseActivity";
import modules from "./../../Helpers/modules";
import formats from "./../../Helpers/formats";

const TextEditor = () => {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      {/* <Container className={classes.Header}>Add Course Activity</Container> */}

      <Container className={classes.borderbox1}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper1}>
              <Divider className={classes.dividerInset} />
              <h3 className={classes.addContent}>ADD CONTENT</h3>
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
      </Container>
    </div>
  );
};
export default TextEditor;
