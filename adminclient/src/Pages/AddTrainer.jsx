import React from "react";
import { Container } from "@material-ui/core";
import {
  Button,
  Card,
  CardHeader,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./../Styles/AddTeacher";

const AddTrainer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          <h1 className={classes.mainHeading}> Add a Trainer</h1>
        </div>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <h5 className={classes.infoHeading}>Trainer's Name:</h5>{" "}
              <form>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                />
              </form>
              <h5 className={classes.infoHeading}>Trainer's Role:</h5>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                />
              </form>
              <h5 className={classes.infoHeading}>Trainer's own Role:</h5>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                />
              </form>
              <Grid item xs={12}>
                <div className={classes.submitBtn}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ fontFamily: "'Exo', sans-serif" }}
                  >
                    SUBMIT TRAINER
                  </Button>
                </div>
              </Grid>
            </Card>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AddTrainer;
