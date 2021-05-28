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
  backButton: {
    marginLeft: "90%",
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  subheading1: {
    letterSpacing: "0.1rem",
    // display: "flex",
    fontFamily: "KoHo, sans-serif",
  },
  dividerInset: {
    margin: `10px 0 0 ${theme.spacing(35)}px`,
    // display: "flex",
    zIndex: "1",
    // marginTop: "5%",
    marginBottom: "-2.5%",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(35)}px`,
    // display: "flex",
    zIndex: "1",
    // marginTop: "5%",
    marginBottom: "-5%",
  },
  dividerInset2: {
    margin: `10px 0 0 ${theme.spacing(35)}px`,
    // display: "flex",
    zIndex: "1",
    // marginTop: "5%",
    marginBottom: "-5%",
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
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  // excelFile: {
  //   display: "flex",
  // },
}));

const AddStudent = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <div>
          <Button
            startIcon={<FastRewindIcon />}
            variant="contained"
            color="primary"
            className={classes.backButton}
            // onClick={handleAddMeet}
          >
            Back
          </Button>
        </div>
        <div>
          <h1 style={{ justifyContent: "center", textAlign: "center" }}>
            {" "}
            Add a Student
          </h1>
        </div>
        <div className={classes.excelFile}>
          <Divider className={classes.dividerInset} />
          <h3 className={classes.subheading1}>IMPORT AN EXCEL FILE</h3>
        </div>

        <Card style={{ maxWidth: "90%" }}>
          <h4 style={{ marginLeft: "2%" }}>Choose Excel file</h4>
          <div style={{ justifyContent: "center", marginLeft: "2%" }}>
            <Card
              style={{
                maxWidth: "98%",
                alignItems: "center",

                // textAlign: "center",
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
            style={{ marginTop: "1%", marginLeft: "3%", marginBottom: "1%" }}
          >
            {" "}
            Submit file
          </Button>
        </Card>
        <div>
          <Grid
            container
            spacing={3}
            style={{ margin: "2%", marginLeft: "0%" }}
          >
            <Grid item xs={12}>
              <Divider className={classes.dividerInset} />
              <h3 className={classes.subheading1}>MANUALLY ADD A STUDENT</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>STUDENT'S INFORMATION</h3>
              <Paper
                className={classes.paper}
                style={{ padding: "1%", paddingTop: "1%", paddingBottom: "5%" }}
              >
                <h4>Student Name:</h4>
                <form>
                  {" "}
                  <TextField id="outlined-basic" variant="outlined" />
                </form>
                <h4>Student's profile picture:</h4>
                <Card
                  style={{
                    maxWidth: "50%",
                    alignItems: "center",
                    padding: "1%",
                    paddingTop: "1%",
                    paddingBottom: "2%",

                    // textAlign: "center",
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
              <Paper
                className={classes.paper}
                style={{ padding: "1%", paddingTop: "1%", paddingBottom: "5%" }}
              >
                <h4 style={{ marginLeft: "5%" }}>Parent's Name:</h4>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </form>
                <h4 style={{ marginLeft: "5%" }}>Parent's Email:</h4>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </form>
                <h4 style={{ marginLeft: "5%" }}>Alternate Email:</h4>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </form>
                <h4 style={{ marginLeft: "5%" }}>Parent's phone No. :</h4>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </form>
                <h4 style={{ marginLeft: "5%" }}>Kid's Age</h4>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </form>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default AddStudent;

{
  /* <div>
            <Card
              style={{ 
                padding: "1%",
                margin: "1%",
                // paddingRight: "%",
                // maxHeight: "10%",
              }}
            >
              {" "}
              <h4>Student Name:</h4>
              <form>
                {" "}
                <TextField id="outlined-basic" variant="outlined" />
              </form>
              <h4>Student's profile picture:</h4>
              <Card
                style={{
                  maxWidth: "98%",
                  alignItems: "center",

                  // textAlign: "center",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => this.upload(e)}
                  name="img"
                  style={{ padding: "1%", paddingTop: "1%" }}
                />
              </Card>
            </Card>
          </div>
          <Card>
            <h4>Parent's Name:</h4>
            <form>
              {" "}
              <TextField id="outlined-basic" variant="outlined" />
            </form>
            <h4>Parent's Email:</h4>
            <form>
              {" "}
              <TextField id="outlined-basic" variant="outlined" />
            </form>
            <h4>Alternate Email:</h4>
            <form>
              {" "}
              <TextField id="outlined-basic" variant="outlined" />
            </form>
            <h4>Parent's phone No. :</h4>
            <form>
              {" "}
              <TextField id="outlined-basic" variant="outlined" />
            </form>
            <h4>Kid's Age</h4>
            <form>
              {" "}
              <TextField id="outlined-basic" variant="outlined" />
            </form>
          </Card> */
}
