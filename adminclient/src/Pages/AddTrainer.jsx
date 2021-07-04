import React, { useContext, useRef } from "react";
import { Container } from "@material-ui/core";
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
import { addTrainer, editTrainer } from "../action/actions";
import { AppContext } from "../AppContext";

const AddTrainer = () => {
  const classes = useStyles();
  const {dispatch} = useContext(AppContext)
  const history = useHistory()
  const trainerToTrainRole = useRef()
  const trainerRole = useRef()
  const {id} = useParams()
  const location = useLocation()
  const editableData = id?location.state.data:""
  
  const handleAddTrainer = () => {
    var data = {
      trainer_id: "507f1f77bcf86cd799439019",
      trainer_will_train_for_role: trainerToTrainRole.current.value,
      trainer_own_role: trainerRole.current.value
    }
    addTrainer(dispatch,data)
    history.push("/trainers")
  }

  const handleEditTrainer = () => {
    var data = {
      trainer_id: "507f1f77bcf86cd799439013",
      trainer_will_train_for_role: trainerToTrainRole.current.value,
      trainer_own_role: trainerRole.current.value
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
              <h5 className={classes.infoHeading}>Trainer's Name:</h5>{" "}
              <form>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                  // defaultValue={}
                />
              </form>
              <h5 className={classes.infoHeading}>Trainer's Role:</h5>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                  defaultValue={editableData.trainer_will_train_for_role}
                  inputRef={trainerToTrainRole}
                />
              </form>
              <h5 className={classes.infoHeading}>Trainer's own Role:</h5>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                  defaultValue={editableData.trainer_own_role}
                  inputRef={trainerRole}
                />
              </form>
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
