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

// import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1%",
  },
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  subheading1: {
    letterSpacing: "0.1rem",
    fontFamily: "KoHo, sans-serif",
  },
  dividerInset: {
    margin: `10px 0 0 ${theme.spacing(27)}px`,
    marginBottom: "-29px",
  },
  dividerInset0: {
    margin: `9px 0 0 ${theme.spacing(32)}px`,
    marginBottom: "-29px",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(30)}px`,
    marginBottom: "-28px",
  },
  dividerInset2: {
    margin: `10px 0 0 ${theme.spacing(28)}px`,
    marginBottom: "-29px",
  },
  chooseFile: {
    padding: "10%",
    marginTop: "2%",
  },
  submitFile: {
    marginTop: "2%",
    marginLeft: 12,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: "#3d3d5c",
    letterSpacing: "0",
    padding: "1%",
    paddingTop: "1%",
    paddingBottom: "5%",
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "4%",
    // color: "green",
    // // fontWeight: "700",
    // fontSize: "1rem",
    // // backgroundColor: "green",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
  },
  infoHeading: {
    marginLeft: "5%",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
  },
  excelFile: {
    marginLeft: "2%",
    width: "100%",
  },
}));

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
