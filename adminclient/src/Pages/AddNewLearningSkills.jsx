import React from "react";
import { Container, Button, Box } from "@material-ui/core";
import { useStyles } from "./../Styles/AddCourseActivity";
import TextEditor from "./../Components/TextEditor/TextEditor";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

function AddNewLearningSkills() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Container className={classes.container}>
          <Container className={classes.Header}>
            Add New Learning Skill
          </Container>
          <TextEditor />
          <Container>
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
          </Container>
        </Container>
      </Container>
    </div>
  );
}
export default AddNewLearningSkills;
