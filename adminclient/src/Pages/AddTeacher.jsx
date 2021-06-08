import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./../Styles/AddTeacher"
const AddTeacher = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}> Add a Teacher</h1>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>
                  Teacher's profile picture:
                </h5>
                <Card
                  style={{
                    maxWidth: "50%",
                    alignItems: "center",
                    padding: "1%",
                    paddingTop: "1%",
                    paddingBottom: "2%",

                    // textAlign: "center",
                  }}
                  className={classes.infoHeading}
                >
                  <input
                    type="file"
                    onChange={(e) => this.upload(e)}
                    name="img"
                  />
                </Card>
                <h5 className={classes.infoHeading}>Student Name:</h5>{" "}
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Teacher Email:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Phone No.:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset2} />
              <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>Qualification :</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Alt Phone No. :</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Teacher Adress:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    // size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Courses :</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.submitBtn}>
                <Button variant="contained" color="secondary">
                  SUBMIT TEACHER
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddTeacher;
