import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import TeacherTrainingActions from "../Components/Actions/TeacherTrainingActions";
import { useHistory } from "react-router";
// import { attendanceData } from "../Helpers/classroomData";
import { TeacherTrainingColumn, TeacherTrainingData } from "../Helpers/TeacherTrainingData.js";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../Components/Table/Table";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const TeacherTraining = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  useEffect(() => {
    setData(TeacherTrainingData);
  }, []);

  const handleClick = () =>{
    history.push("/new-room")
  }

  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Box display="flex" justifyContent="center">
          <Grid item lg={10}>
            <Container>
              <Container
                style={{
                  border: "1px solid #e6e6ff",
                  borderBottom: "white",
                  backgroundColor: "white",
                  padding: "1%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography className={classes.title}>
                    TEACHER TRAINING ROOMS
                  </Typography>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                  >
                    Add New Room
                  </Button>
                </Box>
              </Container>
            </Container>
            <Container>
              {" "}
              <Table data={TeacherTrainingData()} column={TeacherTrainingColumn()}/>
            </Container>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default TeacherTraining;
