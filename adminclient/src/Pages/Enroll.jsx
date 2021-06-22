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
    <Box display="flex" alignItems="center" justifyContent="center">
      <Grid xs={12} lg={8}>
        <Card className={classes.root}>
          <CardHeader
            title="Enrollment Center"
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          ></CardHeader>
          <CardContent>
            <Typography variant="h5" component="h5">
              HERE, SHOULD BE SOME GRAPHS OR ANALYTICS DATA ABOUT ENROLLMENT.
            </Typography>
          </CardContent>
          <Divider />
          <Box
            component="span"
            m={1}
            className={`${classes.spreadBox} ${classes.box}`}
          >
            <Button
              variant="contained"
              color="secondary"
              style={{ height: 30, marginLeft: "-1%" }}
              onClick={handleAddStudent}
            >
              ADD STUDENT(can be made from based)
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ height: 30, paddingLeft: "15%", paddingRight: "15%" }}
              onClick={handleAddTeacher}
            >
              Add Teachers
            </Button>
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
