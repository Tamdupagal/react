import React, { useState } from "react";
import { Editor as MainEditor } from "react-draft-wysiwyg";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./TextEditor.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const useStyles = makeStyles((theme) => ({
  editor1: {
    // height: "70%",
    width: "70%",
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
    marginLeft: "5%",
    padding: "3%",
    // marginTop: "2%",
    marginBottom: "2%",
  },
  paper: {
    padding: theme.spacing(2),
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
}));

function AddSpiritualLearning() {
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
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Divider className={classes.dividerInset} />
              <h3 className={classes.addContent}>ADD CONTENT</h3>
              <MainEditor
                editorState={editorState}
                className={classes.editor1}
                onEditorStateChange={setEditorState}
                toolbarClassName="toolbar"
                wrapperClassName="wrapper"
                editorClassName="editor"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Divider className={classes.dividerInset} />
              <h3 className={classes.addContent}>UPLOAD IMAGE</h3>
              <Container className={classes.uploadimg}>
                <h4>Image:</h4>
                <Grid item>
                  <Paper className={classes.chooseFile}>
                    <input
                      type="file"
                      onChange={(e) => this.upload(e)}
                      name="img"
                    />
                  </Paper>
                </Grid>
              </Container>
            </Paper>
          </Grid>
        </Grid>
        {/* <Container className={classes.saveBtn}>
          {" "}
          <div className="btn__box">
            <button className="button1" type="button">
              Save Changes
            </button>
          </div>
        </Container> */}
        <Grid item>
          <Paper className={classes.saveBtn}>
            <button className="button1" type="button">
              Save Changes
            </button>
          </Paper>
        </Grid>
        <Divider className={classes.endDivider} />
      </Container>
    </div>
  );
}
export default AddSpiritualLearning;
