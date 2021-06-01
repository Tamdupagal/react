import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card, CardHeader } from "@material-ui/core";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
    textField: {
      width: "90%",
      marginLeft: "5%",
    },
    subheading1: {
      letterSpacing: "0.1rem",
      fontFamily: "KoHo, sans-serif",
    },
    infoHeading: {
      marginLeft: "5%",
      color: "#29293d",
      fontFamily: "'Roboto', sans-serif",
      letterSpacing: "0.01rem",
    },
    submitBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: "3%",
    },
    paper: {
      padding: "1%",
      paddingTop: "1%",
      paddingBottom: "5%",
    },
  }));
  

const AddNewClassroom = () => {
    const classes = useStyles();

    return (
        <div>
           <Container>
               <div>
                    <h1 className={classes.mainHeading}>Add a Classroom</h1>
                </div>
                <div>
                    <Grid>
                        <Grid item xs={12}>
                            <Paper>
                                Hy
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
           </Container> 
        </div>
    )
}
export default AddNewClassroom;