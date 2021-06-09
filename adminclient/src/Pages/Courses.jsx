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
} from "@material-ui/core";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ClearIcon from "@material-ui/icons/Clear";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "@material-ui/core/Modal";
import AddCourseSection from "./AddCourseSection";
import AddCourse from "../Components/Courses/AddCourse";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  Heading: {
    fontFamily: "KoHo, sans-serif",
    fontSize: "140%",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    fontFamily:
      "Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  },
}));

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
  const courses = [
    {
      title: "HR AND HIRING",
      catogories: [
        {
          id: "16",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "15",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "13",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "15",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "15",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "15",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
      ],
    },
    {
      title: "TECH COURSES",
      catogories: [
        {
          id: "10",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
        {
          id: "11",
          image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
          subject: "biology",
        },
      ],
    },
  ];
  return (
      <Container>
        <Grid alignItems="center">
          <Grid container alignItems='center' justify='center'>
            <Grid item>
              <h1 style={{ fontSize: "300%" }}>Courses</h1>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box m={1}>
                <Button
                  variant="outlined"
                  size="medium"
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
                  size="medium"
                  onClick={handleOpen}
                  style={{ color: "#5567ff", border: "1px solid #5567ff" }}
                  >
                  <strong>Add Course Section</strong>
                </Button>
              </Box>
            </Grid>
          </Grid>
          {courses.map((course) => (
            <Container>
              <Grid  container alignItems='center' justify='center'>
                <Grid item lg={10}>
                  <Grid container>
                    <Grid item xs={12}>
                      <h1 className={classes.Heading}>{course.title}</h1>
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
        </Grid>
    </Container>
  );
};
export default Courses;
