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
import AddCourseSection from "./../Components/Courses/AddCourseSection";
import { useHistory } from "react-router-dom";
import courses from "./../Helpers/Courses";
import useStyles from "../Styles/Courses";
import "./../Components/Courses/Courses.css";

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
                    className={classes.greenBtn}
                    onClick={handleAddCourse}
                  >
                    <strong>Add Course</strong>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleOpen}
                    className={classes.blueBtn}
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
                  <Grid container spacing={3}>
                    {course.catogories.map((c) => (
                      <Grid item xs={12} md={6} lg={4}>
                        {" "}
                        <Card
                          key={c.id}
                          style={{ width: "80%", marginLeft: "2vw" }}
                          className="flip-card"
                        >
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <Image width="100%" src={c.image} />
                              <CardActions disableSpacing>
                                {c.subject}
                                <IconButton
                                  aria-label="show more"
                                  style={{ marginLeft: "auto" }}
                                >
                                  <CreateIcon type="button" />
                                </IconButton>
                              </CardActions>
                            </div>
                            <div className="flip-card-back">
                              <h2>Course Name</h2>
                              <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                                className={classes.greenBtn1}
                              >
                                <strong>Edit Course</strong>
                              </Button>
                              <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                                className={classes.blueBtn1}
                              >
                                <strong>View Course</strong>
                              </Button>
                            </div>
                          </div>
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
};
export default Courses;
