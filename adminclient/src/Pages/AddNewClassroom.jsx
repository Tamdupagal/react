import React, {useState, useRef} from "react";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./../Styles/AddnewClassroom"
import Classroom from "./../CRUD/Classroom"

const AddNewClassroom = () => {
  const nameRef = useRef();
  const courseRef = useRef();
  const newClassroomState = {
    id: "null",
    Name: "",
    Course: "",
    Teacher: "",
    Students: "",
  };
  const [classroom, setClassroom] = useState(newClassroomState)
  
  const [value, setValue] = useState("interview");

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
              <Card>
                <h5 className={classes.infoHeading}>Classroom Name:</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    ref={nameRef}
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
                    // ref={courseRef}
                    onchange={handleChange}
                    className={classes.textField}
                  >
                    <MenuItem value={1}>interview</MenuItem>
                    <MenuItem value={2}>hello</MenuItem>
                    <MenuItem value={3}>hola</MenuItem>
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
                    className={classes.textField}
                  />
                </form>
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
export default AddNewClassroom;
