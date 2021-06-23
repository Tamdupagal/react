import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./../Styles/AddNewMaterial";
import ReactQuill, { Quill } from "react-quill";
// import { useStyles } from "./../../Styles/AddCourseActivity";
import modules from "./../Helpers/modules";
import formats from "./../Helpers/formats";
import "react-quill/dist/quill.snow.css";
import { EditorState } from "draft-js";

const AddNewMaterial = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} lg={10}>
            <div>
              <h1 className={classes.mainHeading}>Add a Course Material</h1>
            </div>
            <Paper style={{ paddingBottom: "2%", borderRadius: "2%" }}>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <h5 className={classes.infoHeading}>Material Name:</h5>{" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <h5 className={classes.infoHeading}>Topic #</h5>{" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <div>
                <h5 className={classes.infoHeading}>Material Content :</h5>{" "}
                <ReactQuill
                  className={classes.toolbar}
                  theme="snow"
                  placeholder="Add Content here..."
                  formats={formats}
                  modules={modules}
                />
              </div>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <h5 className={classes.infoHeading}>Material File:</h5>{" "}
                  <Card className={classes.card}>
                    <input
                      type="file"
                      onChange={(e) => this.upload(e)}
                      name="img"
                      style={{ padding: "1%" }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <h5 className={classes.infoHeading}>
                    Time Required (in minutes)
                  </h5>{" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.btn}
              >
                <Button color="secondary" variant="contained">
                  SUBMIT MATERIAL
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AddNewMaterial;
