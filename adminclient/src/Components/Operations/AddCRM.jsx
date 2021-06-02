import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    marginLeft: "25%",
  },
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
  card: {
    width: "100%",
  },
  submitBtn: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2%",
    padding: "2%",
  },
}));

const AddCRM = () => {
  const [value, setValue] = React.useState("interview");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Add a CRM:User</h1>
        </div>
        <div className={classes.main}>
          <Grid>
            {/* <Grid item xs={12} lg={3}></Grid> */}
            <Grid item xs={12} lg={8}>
              <Card className={classes.card}>
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
                <h5 className={classes.infoHeading}>User Email:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>Assign Role:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    select
                    value={value}
                    onchange={handleChange}
                    className={classes.textField}
                  >
                    <MenuItem value={"interview"}>interview</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary">
                    SUBMIT CLASSROOM
                  </Button>
                </div>
              </Card>
            </Grid>
            {/* <Grid item xs={12} lg={3}></Grid> */}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddCRM;
