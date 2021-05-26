import React, { useState } from "react";
import { Editor as MainEditor } from "react-draft-wysiwyg";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./TextEditor.css";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const useStyles = makeStyles((theme) => ({
  editor1: {
    // height: "70%",
    width: "100%",
    marginLeft: "0%",
    // marginBottom: "0.5rem",
    // border: "1px solid black",
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
  },
}));

function TextEditor() {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Container className={classes.borderbox}>
      <Container className={classes.Header}>Add New Learning Skill </Container>
      <Container className={classes.borderbox1}>
        <div className="editor__wrapper">
          {/* <h1 className="editor__title">Add Content</h1> */}
          <Container className={classes.editor1}>
            <MainEditor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbarClassName="toolbar"
              wrapperClassName="wrapper"
              editorClassName="editor"
            />
          </Container>
          <div className="btn__box">
            <button className="button1" type="button">
              Save Changes
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
export default TextEditor;
