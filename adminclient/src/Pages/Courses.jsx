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
import AddCourses from "../Components/Courses/AddCourses";
import { useHistory } from "react-router-dom";
import courses from "./../Helpers/Courses";
import useStyles from "../Styles/Courses";
import "./../css/Courses.css"

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

  const handleAddCourseSection = () => {
    history.push("/add-course-section");
  };

  const handleEditCourse = () => {
    history.push("/edit-course-section");
  };

  const body = <AddCourses handleClose={handleClose} />;

  return (
    <div>
      <Container>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="flex-start">
            <Grid xs={12} lg={6}>
              <h1 className={classes.pageHeading}>Courses</h1>
            </Grid>
          </Box>
          <Box>
            <Box display="flex" justifyContent="flex-end">
              <Grid
                xs={12}
                lg={5}
                style={{
                  marginTop: "-7%",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.greenBtn}
                  onClick={handleAddCourseSection}
                >
                  <strong>Add Course Section</strong>
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={handleOpen}
                  className={classes.blueBtn}
                >
                  <strong>Add Courses</strong>
                </Button>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Box>
          {courses.map((course) => (
            <Container>
              <Grid container alignItems="center" justify="center">
                <Grid item lg={10}>
                  <Grid container>
                    <Grid xs={12}>
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
                        </Box>
                      </Grid>
                      <Grid xs={12}>
                        {" "}
                        <Divider className={classes.dividerInset} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box>
                    <Grid container spacing={2} direction="row">
                      {course.catogories.map((c) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          lg={3}
                          style={{ marginTop: "2%" }}
                        >
                          {" "}
                          <Card
                            key={c.id}
                            style={{
                              marginTop: "7%",
                            }}
                            className="flip-card"
                          >
                            <div className="flip-card-inner">
                              <div className="flip-card-front">
                                <Image
                                  className={classes.image}
                                  src={c.image}
                                />
                                <Box>
                                  <CardActions className={classes.courseName}>
                                    {c.subject}
                                  </CardActions>
                                </Box>
                              </div>
                              <div className="flip-card-back">
                                <h2>Course Name</h2>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="primary"
                                  className={classes.greenBtn1}
                                  onClick={handleEditCourse}
                                >
                                  <strong>Edit Course Section</strong>
                                </Button>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="secondary"
                                  className={classes.blueBtn1}
                                >
                                  <strong>View Course Section</strong>
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    {/* <Container>
                    <Grid container spacing={2}
                    direction="row">
                    <Grid item xs={12} md={6} lg={3}>
                      <Card
                        className={classes.paper}
                        style={{ borderLeft: "4px solid red", cursor: "pointer" }}
                      >
                        <div className={classes.content}>
                          83
                          <Typography>Classes</Typography>
                        </div>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                      <Card
                        className={classes.paper}
                        style={{ borderLeft: "4px solid red", cursor: "pointer" }}
                        >
                        <div className={classes.content}>
                          83
                          <Typography>Classes</Typography>
                        </div>
                      </Card>
                    </Grid>
                        </Grid>
                    </Container> */}
                  </Box>
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
