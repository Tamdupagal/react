import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Select } from "@material-ui/core";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddNewRoom";
import { addTrainee, getAllTeachers, getAllTrainers } from "../action/actions";
import { AppContext } from "../AppContext";

const AddNewRoom = () => {
  const {dispatch} = useContext(AppContext)
  const [allTeachers, setAllTeachers] = useState([])
  const [allTrainers, setAllTrainers] = useState([])
  const [trainerId,setTrainerId] = useState([])
  const [traineeId,setTraineeId] = useState([])
  const [role, setRole] = useState("")
  let trainers;
  let teachers;
  let teacherOptions = [];
  const roomName = useRef()
  const classes = useStyles();
  useEffect(async() => {
    if(!trainers){
      try{
        trainers = await getAllTrainers(dispatch)
        trainers.map(c=>console.log(c._id))
        setAllTrainers(trainers)
      }
      catch (err) {
        console.log(err)
      }
    }
    if(!teachers){
      teachers = await getAllTeachers(dispatch)
      teachers.map(c=>teacherOptions.push(c.personelDetails))
      setAllTeachers(teacherOptions)
      console.log(teachers)
    }
  }, [])

  const handleTraineeChange = (e) => {
    e.preventDefault()
    setTraineeId(e.target.value._id)
  }

  const handleTrainerChange = (e) => {
    e.preventDefault()
    setTrainerId(e.target.value._id)
  }

  const handleTraineeRole = (e) => {
    e.preventDefault()
    setRole(e.target.value)
    console.log(e.target.value)
  }

  const handleSaveRoom = () =>{
    var data = {
      classroom_details: [roomName],
      trainer_id: trainerId,
      trainee_id: traineeId,
      trainer_type: role
    }
    addTrainee(dispatch,data)
    // history.push("/trainers")
  }
  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Add a Room</h1>
      </div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={9}>
              <Card className={classes.card0}>
                <h5 className={classes.infoHeading}>Room Name:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={roomName}
                  />
                </form>
                <h5 className={classes.infoHeading}>Assign Trainer:</h5>
                <form>
                  {
                     (
                  <Select
                    variant="outlined"
                    size="small"
                    onChange={handleTrainerChange}
                    className={classes.textField}
                    defaultValue=""
                  >
                    {
                      allTrainers.map((trainer, index) => (
                          <MenuItem key={index} value={trainer}>
                            {trainer._id}
                          </MenuItem>
                        ))
                    }
                  </Select>
                    )
                  }
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
                    onChange={handleTraineeRole}
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
                    onChange={handleTraineeChange}
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
                  <Button variant="contained" color="secondary"
                  onClick={handleSaveRoom}
                  >
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
