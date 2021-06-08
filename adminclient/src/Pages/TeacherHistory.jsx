import React from "react";
import { Container, Table, TableContainer } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, CardHeader } from "@material-ui/core";
import TeacherTimeline from "../Components/Teacher/TeacherTimeline";
import TeacherLoginActivity from "../Components/Teacher/TeacherLoginActivity";

const useStyles = makeStyles((theme) => ({}));

const TeacherHistory = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <TeacherTimeline/>
            </Grid>
            <Grid item xs={12} md={4}>
              <TeacherLoginActivity/>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default TeacherHistory;
