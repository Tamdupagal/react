import React, { useContext, useEffect, useState } from "react";
import { Container, Select } from "@material-ui/core";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddNewRoom";
import { getAllTeachers, getAllTrainers } from "../action/actions";
import { AppContext } from "../AppContext";

const AddNewRoom = () => {
  const {dispatch} = useContext(AppContext)
  const [value, setValue] = React.useState("interview");
  const [allTeachers, setAllTeachers] = useState([])
  let trainers;
  let teachers;
  let teacherOptions = [];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  useEffect(async() => {
    if(!trainers){
      trainers = await getAllTrainers(dispatch)
      console.log(trainers)
    }
    if(!teachers){
      teachers = await getAllTeachers(dispatch)
      teachers.map(c=>teacherOptions.push(c.personelDetails))
      setAllTeachers(teacherOptions)
      console.log(teachers)
    }
  }, [])

  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Add a Classroom</h1>
      </div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          <Box display="flex" justifyContent="center">
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
                <h5 className={classes.infoHeading}>Trainer Type:</h5>
                <h5 className={classes.infoHeading}>Assign Trainer:</h5>
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
                    <MenuItem value={"hii"}>hii</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>
                <h5 className={classes.infoHeading}>Trainee Type:</h5>
                <form>
                {" "}
                <Select
                    variant="outlined"
                    size="small"
                    // value={ownRole}
                    // options={courseOptions}
                    // inputRef={courseRef}
                    // onChange={handleOwnRoleChange}
                    className={classes.textField}
                    defaultValue=""
                  >
                          <MenuItem value={"ADMIN"}>
                            ADMIN
                          </MenuItem>
                          <MenuItem value={"Teacher"} >
                            TEACHER
                          </MenuItem>
                  </Select>
              </form>
                
                <h5 className={classes.infoHeading}>Assign Trainee:</h5>
                <form>
                  {
                     (
                  <Select
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    className={classes.textField}
                    defaultValue=""
                  >
                    {
                      allTeachers.map((teacher, index) => (
                          <MenuItem key={index} value={teacher}>
                            {teacher.name}
                          </MenuItem>
                        ))
                    }
                  </Select>
                    )
                  }
                    </form>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary">
                    SUBMIT CLASSROOM
                  </Button>
                </div>
              </Card>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default AddNewRoom;
