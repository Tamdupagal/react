import React, {useState, useRef} from "react";
import { Container, Select } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./../Styles/AddnewClassroom"
import Classroom from "./../CRUD/Classroom"

const AddNewClassroom = () => {
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef()
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
    console.log(event.target.value)
  };

  const saveClassroom = () => {
    var data = {
      name: nameRef.current.value,
      courses: ["1","2","3"],
      students: ["1","2","3"]
    }
    
    console.log(nameRef.current.value)
    // console.log(courseRef.current.value)
    Classroom.create(data)
    .then(res => {
      setClassroom({
        id: res.data.id,
        name: res.data.Name,
        courses: [1,2,3],
        students: [1,2,3]
      });
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  }


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
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    ref={nameRef}
                  />
                </form>
                <h5 className={classes.infoHeading}>Assign Course:</h5>
                {/* <form> */}
                  {" "}
                  <Select
                    variant="outlined"
                    size="small"
                    // inputRef={courseRef}
                    // onChange={handleChange}
                    className={classes.textField}
                  >
                    <MenuItem value={1}>interview</MenuItem>
                    <MenuItem value={2}>hello</MenuItem>
                    <MenuItem value={3}>hola</MenuItem>
                  </Select>
                {/* </form> */}
                <h5 className={classes.infoHeading}>Assign Teacher:</h5>
                <form>
                  {/* {" "} */}
                  <TextField
                    variant="outlined"
                    size="small"
                    select
                    inputRef={courseRef}
                    // onChange={handleChange}
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
                    inputRef={studentRef}
                    className={classes.textField}
                  />
                </form>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary" onClick={saveClassroom}>
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
