import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "@material-ui/core/Modal";
import AddCourseSection from "./AddCourseSection";
import { useHistory } from "react-router-dom";
import courses from "./../Helpers/Courses"
import useStyles from "../Styles/Courses";

const Courses = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCourse = () => {
    history.push("/add-course");
  };

  const body = <AddCourseSection handleClose={handleClose} />;
  
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} lg={10}>
            <Grid container alignItems="center">
              <Box display="flex" justifyContent="flex-start">
                <h1 style={{ fontSize: "300%" }}>Courses</h1>
              </Box>
              <Grid item xs={12} lg={6}>
                <Box m={1} display="flex" justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      marginRight: "20px",
                      color: "green",
                      border: "1px solid green",
                    }}
                    onClick={handleAddCourse}
                  >
                    <strong>Add Course</strong>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleOpen}
                    style={{ color: "#5567ff", border: "1px solid #5567ff" }}
                  >
                    <strong>Add Course Section</strong>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          {courses.map((course) => (
            <Container>
              <Grid container alignItems="center" justify="center">
                <Grid item lg={10}>
                  <Grid container>
                    <Grid item xs={12} md={10}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        p={1}
                        m={1}
                      >
                        {" "}
                        <Box>
                          {" "}
                          <h1 className={classes.Heading}>{course.title}</h1>
                        </Box>{" "}
                        <Box m={1}>
                          <Button
                            startIcon={<BackspaceIcon />}
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.btn}
                          >
                            {" "}
                            Delete
                          </Button>
                        </Box>
                        <Box>
                          <Divider className={classes.dividerInset2} />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    {course.catogories.map((c) => (
                      <Grid item xs={12} md={6} lg={3}>
                        {" "}
                        <Card
                          key={c.id}
                          style={{ width: "80%", marginLeft: "2vw" }}
                        >
                          <Image width="100%" src={c.image} />
                          <CardActions disableSpacing>
                            {c.subject}
                            <IconButton
                              aria-label="show more"
                              style={{ marginLeft: "auto" }}
                            >
                              <CreateIcon />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          ))}
        </Box>
      </Container>
    </div>
  );
};
export default Courses;
