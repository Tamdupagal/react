import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./../Components/Table/Table";
import TrainersActions from "./../Components/Actions/TrainersActions";
import { TrainersColumn, TrainersData } from "./../Helpers/TrainersData";
import { getAllTrainers } from "../action/actions";
import { AppContext } from "../AppContext";

const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
  container: {
    border: "1px solid #e6e6ff",
    borderBottom: "white",
    backgroundColor: "white",
    padding: "2%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

const Trainers = () => {
  const classes = useStyles();
  const history = useHistory();
  const {state, dispatch} = useContext(AppContext)

  
  useEffect(() => {
    getAllTrainers(dispatch)
  }, []);

  const handleAddTrainer = () => {
    history.push("/add-trainer");
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Grid item xs={12} lg={10}>
          <Container>
            <Container className={classes.container}>
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.title}>Trainers</Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddTrainer}
                  size="small"
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  ADD NEW Trainer
                </Button>
              </Box>
            </Container>
          </Container>

          <Container>
            <Table data={TrainersData(state)} column={TrainersColumn()}  />
          </Container>
        </Grid>
      </Box>
    </div>
  );
};

export default Trainers;
