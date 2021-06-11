import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../Courses/AddCourse.css";
import { Editor as MainEditor } from "react-draft-wysiwyg";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./TextEditor.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const useStyles = makeStyles((theme) => ({
  editor1: {
    width: "100%",
    marginLeft: "0%",
  },
  Header: {
    fontSize: "2rem",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#318ebd",
    width: "90%",
    color: "white",
    border: "2px solid #318ebd",
    padding: "2%",
  },
  // borderbox: {
  //   border: "2px solid #318ebd",
  // },
  borderbox1: {
    border: "1px solid rgb(128, 128, 128, 0.4)",
    width: "90%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    marginLeft: "5%",
    padding: "3%",
    // marginTop: "2%",
    marginBottom: "2%",
  },
  paper1: {
    // marginTop: "2%",
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: "2%",
    padding: theme.spacing(0.2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  uploadimg: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    paddingBottom: "8%",
  },
  chooseFile: {
    padding: "2%",
  },
  saveBtn: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "2%",
    textAlign: "center",
    marginTop: "3%",
  },
  addContent: {
    display: "inline",
    color: "#302e2e",
    backgroundColor: "#f0f5f5",
    letterSpacing: "0.1rem",
    // marginLeft: "0%",
    // marginBottom: "5%",
    // marginTop: "50%",
    // paddingTop: "1%",
    zIndex: "1",
  },
  dividerInset: {
    margin: `3px 0 0 ${theme.spacing(15)}px`,
    marginBottom: "-10px",
  },
  endDivider: {
    padding: "0.05%",
    marginTop: "6%",
  },
  submitBtn: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    margin: "4%",
    marginTop: "4%",
    marginBottom: "4%",
  },
}));

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

function AddSpritualLearning() {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // upload(e) {
  //   console.warn(e.target.file)
  // }

  return (
    <div>
      <Container className={classes.Header}>Add Spiritual Learning Skill </Container>

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
export default AddSpritualLearning;

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
