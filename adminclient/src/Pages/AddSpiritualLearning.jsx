import React from "react";
import { Container, Button, Box } from "@material-ui/core";
import { useStyles } from "./../Styles/AddCourseActivity";
import TextEditor from "./../Components/TextEditor/TextEditor";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import praying from "./../Images/praying.svg";

function AddSpiritualLearning() {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Grid item xs={12} lg={10}>
          <Grid container>
            <Container>
              <Container className={classes.Header}>
                <img
                  src={praying}
                  style={{ width: "3rem", margin: "2%" }}
                ></img>
                <h3>Add Spiritual Learning</h3>
              </Container>
            </Container>
          </Grid>
          <Container>
            <Paper style={{ padding: "1%" }}>
              <TextEditor />
              <Box display="flex" justifyContent="center">
                <Grid item lg={12}>
                  <Box className={classes.paper}>
                    <div className={classes.submitBtn}>
                      <Button variant="contained" color="secondary">
                        Save Changes
                      </Button>
                    </div>
                  </Box>
                </Grid>
              </Box>
              <Divider className={classes.endDivider} />
            </Paper>
          </Container>
        </Grid>
      </Box>
    </div>
  );
}
export default AddSpiritualLearning;
