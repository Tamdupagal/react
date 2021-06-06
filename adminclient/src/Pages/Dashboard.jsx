import React from "react";
import { Container, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.dark,
    fontSize: "large",
    border: "1px solid #e0ebeb",
    borderRadius: "8px",
  },
  divider: {
    marginTop: "2%",
  },
  content: {
    fontSize: "1.5rem",
    fontFamily: "'Exo', sans-serif",
    color: "#33334d",
  },
  container: {
    // border: "0px",
    paddingBottom: "5vh",
    borderBottom: "3px solid #ccc",
  },
}));

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
          <Divider className={classes.dividerInset1} />
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
