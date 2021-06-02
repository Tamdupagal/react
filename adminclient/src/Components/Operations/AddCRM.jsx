import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
  },
  infoHeading: {
    marginLeft: "5%",
    marginBottom: "1px",
    fontSize: "0.9rem",
    color: "#29293d",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "0.01rem",
  },
}));

const AddCRM = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Add a CRM:User</h1>
        </div>
        <div>
          <Grid>
            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Card>
                <h5 className={classes.infoHeading}>Classroom Name:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}></Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddCRM;
