import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const TeacherTimeline = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card>hello</Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>hii bye bye</Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default TeacherTimeline;
