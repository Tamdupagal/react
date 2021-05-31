import React from "react";
import { Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.dark,
    fontSize: "large",
    marginInline: "5%",
    border: "1px solid #e0ebeb",
    borderRadius: "8px",
    // borderLeft: "3px solid red",
  },
  paper1: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.dark,
    fontSize: "large",
    marginInline: "5%",
    border: "1px solid #e0ebeb",
    borderRadius: "8px",
    borderLeft: "3px solid red",
  },
  button: {
    marginLeft: "85%",
    margin: "2%",
  },
  divider: {
    marginTop: "2%",
  },
  content: {
    fontSize: "1.5rem",
    // fontWeight: "bold",
    fontFamily: "'Exo', sans-serif",
    color: "#1f1f2e",
  },
  //   paper1: {
  //     padding: theme.spacing(4),
  //     textAlign: "center",
  //     color: theme.palette.text.dark,
  //     fontSize: "large",
  //     marginInline: "5",
  //     borderRadius: "10",
  //     borderRightColor: "secondary",
  //   },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="lg">
        {/* <Button
          variant="outlined"
          size="medium"
          color="secondary"
          startIcon={<PowerSettingsNewRoundedIcon />}
          className={classes.button}
        >
          Log Out
        </Button> */}
        {/* <Divider/> */}
      </Container>
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper1}>
            <div className={classes.content}>
              83
              <Typography>Classes</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.content}>
              86
              <Typography>Students</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.content}>
              9<Typography>Teachers</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.content}>
              42
              <Typography>Total Lectures</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
