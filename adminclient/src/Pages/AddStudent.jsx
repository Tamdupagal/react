// import { Box, Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./../Styles/AddStudent"

const AddStudent = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Container>
          <div>
            <h1 className={classes.mainHeading}> Add a Student</h1>
          </div>
          <div className={classes.excelFile}>
            <Divider className={classes.dividerInset} />
            <h3 className={classes.subheading1}>IMPORT AN EXCEL FILE</h3>
          </div>

          <Card className={classes.excelFile}>
            <h5 style={{ marginLeft: "2%" }}>Choose Excel file</h5>
            <div style={{ justifyContent: "center", marginLeft: "2%" }}>
              <Card
                style={{
                  maxWidth: "98%",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => this.upload(e)}
                  name="img"
                  style={{ padding: "1%" }}
                />
              </Card>
            </div>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "2%", marginLeft: "2%", marginBottom: "3%" }}
            >
              {" "}
              Submit file
            </Button>
          </Card>
          <div>
            <Grid container spacing={3} style={{ margin: "2%" }}>
              <Grid item xs={12}>
                <Divider className={classes.dividerInset0} />
                <h3 className={classes.subheading1}>MANUALLY ADD A STUDENT</h3>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Divider className={classes.dividerInset1} />
                <h3 className={classes.subheading1}>STUDENT'S INFORMATION</h3>
                <Paper className={classes.paper}>
                  <h5 className={classes.infoHeading}>Student Name:</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ marginLeft: "5%" }}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>
                    Student's profile picture:
                  </h5>
                  <Card
                    style={{
                      maxWidth: "50%",
                      alignItems: "center",
                      padding: "1%",
                      paddingTop: "1%",
                      paddingBottom: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    <input
                      type="file"
                      onChange={(e) => this.upload(e)}
                      name="img"
                    />
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Divider className={classes.dividerInset2} />
                <h3 className={classes.subheading1}>PARENT'S INFORMATION</h3>
                <Paper className={classes.paper}>
                  <h5 className={classes.infoHeading}>Parent's Name:</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Parent's Email:</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Alternate Email:</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Parent's phone No. :</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Kid's Age</h5>
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
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary">
                    SUBMIT STUDENT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Container>
    </div>
  );
};
export default AddStudent;
