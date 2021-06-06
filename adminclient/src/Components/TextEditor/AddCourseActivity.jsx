import React, { useState } from "react";
import { Editor as MainEditor } from "react-draft-wysiwyg";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./TextEditor.css";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {useStyles} from "./../../Styles/AddCourseStyle"
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const formats = [
  "background",
  "bold",
  "color",
  "font",
  "code",
  "italic",
  "link",
  "size",
  "strike",
  "script",
  "underline",
  "blockquote",
  "header",
  "align",
  "direction",
  "image",
  "video",
  "code-block",
];

const modules = {
  toolbar: ".toolBar",
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
};

function AddCourseActivity() {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // upload(e) {
  //   console.warn(e.target.file)
  // }

  return (
    <div>
      <Container className={classes.Header}>Add Course Activity</Container>

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
export default AddCourseActivity;
