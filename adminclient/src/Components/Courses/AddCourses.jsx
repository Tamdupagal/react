import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";
const useStyles = makeStyles({
  root: {
    minWidth: 500,
    marginTop: 50,
  },
  TextField: {
    minWidth: 460,
    marginTop: "10px",
  },
});

const AddCourses = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <div>
          <Card className={classes.root}>
            <CardHeader
              title="ADD COURSE"
              style={{ borderRadius: "5px" }}
              action={
                <Button onClick={props.handleClose}>
                  <ClearIcon />
                </Button>
              }
            />
            <Divider />
            <CardContent>
              <Typography>
                <strong style={{ fontFamily: "'Exo', sans-serif" }}>
                  COURSE NAME:
                </strong>
              </Typography>
              <TextField
                className={classes.TextField}
                placeholder="Enter Name of Course "
                size="small"
                variant="outlined"
              />
            </CardContent>
            <Box
              m={2}
              display="flex"
              alignItems="right"
              justifyContent="flex-end"
            >
              <Button
                size="medium"
                variant="contained"
                style={{ marginRight: "10px", fontFamily: "'Exo', sans-serif" }}
                onClick={props.handleClose}
              >
                Close
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                style={{ fontFamily: "'Exo', sans-serif" }}
              >
                Save Changes
              </Button>
            </Box>
          </Card>
        </div>
      </Box>
    </>
  );
};
export default AddCourses;
