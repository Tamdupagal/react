import React, { useContext, useRef, useEffect } from "react";
import { Container, MenuItem, Select } from "@material-ui/core";
import {
  Button,
  Card,
  CardHeader,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./../Styles/AddTeacher";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addTrainer, editTrainer, getAllTeachers } from "../action/actions";
import { AppContext } from "../AppContext";
import { useState } from "react";

const AddTrainer = () => {
  const classes = useStyles();
  const {dispatch} = useContext(AppContext)
  const history = useHistory()
  const trainerToTrainRole = useRef()
  const trainerRole = useRef()
  const {id} = useParams()
  const location = useLocation()
  const editableData = id?location.state.data:""
  const [allTeachers, setAllTeachers] = useState([])
  const [teacherId, setTeacherId] = useState([])
  const [ownRole, setOwnRole] = useState("")
  const [role, setRole] = useState("")
  let teachers;
  const teacherOptions = []
  
  useEffect(async() => {
    if(!teachers){
      try {
        teachers= await getAllTeachers(dispatch)
        teachers.map(c=>teacherOptions.push(c.personelDetails))
        setAllTeachers(teacherOptions)
      }
      catch(err){
      }
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setTeacherId(e.target.value._id)
  }
  const handleOwnRoleChange = (e) => {
    e.preventDefault()
    setOwnRole(e.target.value)
  }
  const handleRoleChange = (e) => {
    e.preventDefault()
    setRole(e.target.value)
  }
  const handleAddTrainer = () => {
    var data = {
      trainer_id: teacherId,
      trainer_will_train_for_role: role,
      trainer_own_role: ownRole
    }
    addTrainer(dispatch,data)
    history.push("/trainers")
  }

  const handleEditTrainer = () => {
    var data = {
      trainer_id: teacherId,
      trainer_will_train_for_role: role,
      trainer_own_role: ownRole
    }
    editTrainer(dispatch,data,id)
    history.push("/trainers")
  }
  

  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          {
            id?
            <h1 className={classes.mainHeading}> Edit Trainer</h1>:
            <h1 className={classes.mainHeading}> Add a Trainer</h1>
          }
        </div>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
            <h5 className={classes.infoHeading}>Trainer:</h5>
            <Box display="flex" justifyContent="center">
              <Grid item xs={12} lg={11}>
            <form>
                  {
                     (
                  <Select
                    variant="outlined"
                    size="small"
                    // options={courseOptions}
                    // inputRef={courseRef}
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
              </Grid>
            </Box>
              <h5 className={classes.infoHeading}>Trainer's Role:</h5>
              <Box display="flex" justifyContent="center">
              <Grid item xs={12} lg={11}>
              <form>
                {" "}
                <Select
                    variant="outlined"
                    size="small"
                    value={ownRole}
                    // options={courseOptions}
                    // inputRef={courseRef}
                    onChange={handleOwnRoleChange}
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
              </Grid>
               </Box>
              <h5 className={classes.infoHeading}>Trainer's own Role:</h5>
              <Box display="flex" justifyContent="center">
              <Grid item xs={12} lg={11}>
              <form>
                {" "}
                <Select
                    variant="outlined"
                    size="small"
                    value={role}
                    // options={courseOptions}
                    // inputRef={courseRef}
                    onChange={handleRoleChange}
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
              </Grid></Box>
              <Grid item xs={12}>
                <div className={classes.submitBtn}>
                  {
                    id?(
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ fontFamily: "'Exo', sans-serif" }}
                    onClick={handleEditTrainer}
                  >
                    EDIT TRAINER
                  </Button>):
                  (
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ fontFamily: "'Exo', sans-serif" }}
                      onClick={handleAddTrainer}
                    >
                      SUBMIT TRAINER
                    </Button>)
                  }
                </div>
              </Grid>
            </Card>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AddTrainer;
