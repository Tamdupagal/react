import React from "react";
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
    marginTop: "3%",
    marginBottom: "3%",
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
  addMore: {
    fontWeight: "700",
    textAlign: "center",
    padding: "1rem",
  },
  container: {
    marginLeft: "18%",
  },
  container1: {
    marginLeft: "4%",
    marginTop: "3%",
  },
  card1: {
    borderRadius: "0%",
    border: "0.5px solid #ccc",
    padding: "1rem",
  },
  card2: {
    borderRadius: "0%",
    border: "0.5px solid #ccc",
    padding: "1rem",
  },
  card3: {
    borderRadius: "0%",
    border: "0.5px solid #ccc",
    padding: "1.1rem",
  },
  card0: {
    borderRadius: "1.5%",
    border: "1px solid #ccc",
    padding: "1rem",
  },
}));

const AddNewRoom = () => {
  const [value, setValue] = React.useState("interview");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Add a Classroom</h1>
      </div>
      <Container>
        <div>
          <Grid className={classes.container}>
            <Grid item xs={12} lg={9}>
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
                <h5 className={classes.infoHeading}>Assign Teacher:</h5>
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
                    <MenuItem value={"hii"}>hii</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>
                <h5 className={classes.infoHeading}>Assign Students:</h5>
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
                    <MenuItem value={"hii"}>hii</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>

                <Grid container className={classes.container1}>
                  <Grid item xs={12} lg={3}>
                    <Card className={classes.card1}>
                      <h5 className={classes.infoHeading}>Trainee Type:</h5>

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
                        <MenuItem value={"hii"}>hii</MenuItem>
                        <MenuItem value={"hello"}>hello</MenuItem>
                        <MenuItem value={"hola"}>hola</MenuItem>
                      </TextField>
                    </Card>
                  </Grid>
                  <Grid item xs={12} lg={5}>
                    <Card className={classes.card2}>
                      <h5 className={classes.infoHeading}>Assign Trainee:</h5>

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
                        <MenuItem value={"hii"}>hii</MenuItem>
                        <MenuItem value={"hello"}>hello</MenuItem>
                        <MenuItem value={"hola"}>hola</MenuItem>
                      </TextField>
                    </Card>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Card className={classes.card3}>
                      <div className={classes.addMore}>
                        <Button variant="contained" color="secondary">
                          Add More
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary">
                    SUBMIT CLASSROOM
                  </Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddNewRoom;
