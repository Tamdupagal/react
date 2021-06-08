import React from "react";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./../Styles/AddNewRoom"

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
