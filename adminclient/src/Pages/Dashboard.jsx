import React from "react";
import { Container, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import {useStyles} from "./../Styles/Dashboard"
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Card
              className={classes.paper}
              style={{ borderLeft: "4px solid red" }}
            >
              <div className={classes.content}>
                83
                <Typography>Classes</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.paper}>
              <div className={classes.content}>
                86
                <Typography>Students</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.paper}>
              <div className={classes.content}>
                9<Typography>Teachers</Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.paper}>
              <div className={classes.content}>
                42
                <Typography>Total Lectures</Typography>
              </div>
            </Card>
          </Grid>
          <Divider/>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
