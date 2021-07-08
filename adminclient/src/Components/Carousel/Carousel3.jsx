import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Container,
  makeStyles,
  Paper,
  Box,
  Grid,
  Divider,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import clsx from "clsx";
import useStyles from "./../../Styles/Carousel";

const Carousel3 = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Container>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={10}>
              <Paper style={{ marginTop: "2%" }}>
                <Carousel>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If you were a tree, what kind of tree would you be and
                      why?{" "}
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      How Many Cricket Balls Can You Fit Into a School Bus?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If You Were an Animal, Which One Would You Want to Be?and
                      why
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>Salary Expectations?</h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      Tell Me About Your Dream Job.
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      How Would You Want To Be Remembered?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      Would You Rather Look Like A Potato, Or Feel Like A
                      Potato?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If You Had The World’s Attention For 30 Seconds, What
                      Would You Say?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      You’ve Been Given An Elephant. You Can’t Get Rid Of It.
                      What Would You Do With It?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If Your Food Is Bad At A Restaurant, Would You Say
                      Something?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      What Talent Would You Want To Possess If You Could?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      What Would You Rather Keep /Gain /Throw Away: Knowlegde Or
                      Money or Love?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If You Had Three Wishes, What Would You Wish For?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>What makes you tick?</h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      What can you do for us that Other Candidates can't?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      What do you/we need to know to work out whether you can
                      work with us?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #3</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 25 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      How do you handle stress and pressure?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                </Carousel>
              </Paper>
            </Grid>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default Carousel3;
