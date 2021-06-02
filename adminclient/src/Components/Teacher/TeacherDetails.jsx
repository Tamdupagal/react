import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(29)}px`,
    // zIndex: "1",
    marginBottom: "-29px",
  },
  dividerInset2: {
    margin: `10px 0 0 ${theme.spacing(24)}px`,
    marginBottom: "-29px",
  },
  subheading1: {
    letterSpacing: "0.1rem",
    fontFamily: "KoHo, sans-serif",
  },
}));

const TeacherDetails = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Teacher: Name</h1>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset2} />
              <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default TeacherDetails;
