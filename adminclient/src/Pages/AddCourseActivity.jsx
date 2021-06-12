import React from "react";
import { Container, Button, Box } from "@material-ui/core";
import { useStyles } from "./../Styles/AddCourseActivity";
import TextEditor from "./../Components/TextEditor/TextEditor";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

function AddCourseActivity() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Container className={classes.Header}>Add Course Activity</Container>
        <Container>
          <Container>
            <Paper style={{ padding: "1%" }}>
              <TextEditor />
              <Box display="flex" justifyContent="center">
                <Grid item lg={11}>
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
        </Container>
      </Container>
    </div>
  );
}
export default AddCourseActivity;
