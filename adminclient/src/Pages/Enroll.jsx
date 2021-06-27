import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { useStyles } from "./../Styles/Enroll";
const Enroll = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleAddStudent = () => {
    history.push("/add-student");
  };
  const handleAddTeacher = () => {
    history.push("/add-teacher");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{ marginBottom: "36vh" }}
    >
      <Grid xs={12} lg={10}>
        <Card>
          <Box className={classes.cardHeader}>
            {" "}
            <h3 style={{ marginLeft: "3%" }}>Enrollment Center</h3>
          </Box>
          <CardContent>
            <Typography
              // variant="h5"
              // component="h5"
              style={{ fontFamily: "'Exo', sans-serif", textAlign: "center" }}
            >
              HERE, SHOULD BE SOME GRAPHS OR ANALYTICS DATA ABOUT ENROLLMENT.
            </Typography>
          </CardContent>
          <Divider />
          <Box
            component="span"
            m={1}
            className={`${classes.spreadBox} ${classes.box}`}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.blueBtn}
                  onClick={handleAddStudent}
                >
                  ADD STUDENT(can be made form based)
                </Button>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.greenBtn}
                  onClick={handleAddTeacher}
                >
                  Add Teachers
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};
export default Enroll;

{
  /* <Box display="flex" 
alignItems="center"
// justifyContent="center"
padding="5px">
    <Button
    variant='contained'
    size="medium"
    color="secondary"
    >
    ADD STUDENT(can be made from based)
    </Button>
    <Button
    variant='contained'
    size="medium"
    color="primary"
    
    >
    Add Teachers                      
    </Button>
  </Box> */
}
