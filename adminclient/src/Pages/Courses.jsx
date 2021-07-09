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
import React,{useState,useEffect, useContext} from 'react';
import { Image } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "@material-ui/core/Modal";
import AddCourses from "../Components/Courses/AddCourses";
import {Link,useHistory} from 'react-router-dom';
// import courses from "./../Helpers/Courses";
import useStyles from "../Styles/Courses";
import "./../css/Courses.css";
import {AppContext} from '../AppContext';
import { getAllCourses } from "../action/actions";
import CircularProgress from '@material-ui/core/CircularProgress';

const Courses = () => {
  const {state,dispatch} = useContext(AppContext);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [load,setLoad]= useState(true);
  const history = useHistory();

  useEffect(async()=>{
    console.log("in use effect");
    getAllCourses(dispatch)
      .then((res)=>{
        setLoad(false);
        console.log('In res' , res);
      })
      .catch((err)=>{
        console.log('err' , err);
      })
  },[])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCourseSection = () => {
    history.push("/add-course-section");
  };

  const handleViewCourseSection = () => {
    history.push("/view-course-section");
  };

  const body = <AddCourses handleClose={handleClose} />;
  const {courses} = state.courseData ;
  console.log(typeof courses);
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="flex-start">
            <Grid item xs={12} lg={6}>
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
        {
          load && (
                  <CircularProgress style={{marginLeft: '30vw' }} size={30}/>
                )
                ||
          !load && 
          <Box>
            {courses.map((course , ind) => (
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
                        {course.course_sections.map((courseSection , index) => (
                          <Grid
                            item
                            xs={12}
                            md={6}
                            lg={3}
                            style={{ marginTop: "2%" }}
                          >
                            {" "}
                            <Card
                              key={courseSection.id}
                              style={{
                                marginTop: "7%",
                              }}
                              className="flip-card"
                            >
                              <div className="flip-card-inner">
                                <div className="flip-card-front">
                                  <Image
                                    className={classes.image}
                                    src={courseSection.image}
                                  />
                                  <Box>
                                    <CardActions className={classes.courseName}>
                                      {courseSection.name}
                                    </CardActions>
                                  </Box>
                                </div>
                                <div className="flip-card-back">
                                  <h2>{courseSection.name}</h2>
                                  <Link to={{pathname: `/edit-course-section/${course._id}/${courseSection._id}`,state: { courses: courses , course_section: courseSection}}} key={index} style={{textDecoration: 'none'}}> 
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        className={classes.greenBtn1}
                                      >
                                    <strong>Edit Course Section</strong>
                                    </Button>
                                  </Link>
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                    className={classes.blueBtn1}
                                    onClick={handleViewCourseSection}
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
        }
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