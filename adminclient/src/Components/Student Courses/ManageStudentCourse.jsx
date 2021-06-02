import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "5%",
    marginBottom: "5%",
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
  submitBtn: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2%",
    padding: "2%",
  },
  container: {
    marginLeft: "12%",
  },
  card0: {
    borderRadius: "1.5%",
    border: "1px solid #ccc",
    padding: "1rem",
  },
}));
const ManageStudentCourse = () => {
    const [value, setValue] = React.useState("interview");
    const handleChange = (event) => {
            setValue(event.target.value);
        };
    const classes = useStyles();

    return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Manage Course for Name</h1>
      </div>
      <Container>
        <Grid xs={12} md={9} className={classes.container}>
          <Card className={classes.card0}>
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
            <h5 className={classes.infoHeading}>Assign Course:</h5>
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
                SUBMIT
              </Button>
            </div>
          </Card>
        </Grid>
      </Container>
    </div>
    )
}
export default ManageStudentCourse;
