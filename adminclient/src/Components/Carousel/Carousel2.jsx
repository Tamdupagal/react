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

const Carousel2 = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Container>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={10}>
              <Paper style={{ marginTop: "2%" }}>
                <Carousel>
                  <div style={{ paddingBottom: "20%" }}>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>
                      Would you rather fight ?{" "}
                    </h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="100 duck-sized horses"
                            control={<StyledRadio />}
                            label="100 duck-sized horses"
                          />
                          <FormControlLabel
                            value="One horse-sized duck"
                            control={<StyledRadio />}
                            label="One horse-sized duck"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      Are You the Type Who Checks _____ During Your Vacation?
                      ...{" "}
                    </h4>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="Mobile"
                            control={<StyledRadio />}
                            label="Mobile"
                          />
                          <FormControlLabel
                            value="Phone"
                            control={<StyledRadio />}
                            label="Phone"
                          />
                          <FormControlLabel
                            value="Email"
                            control={<StyledRadio />}
                            label="Email"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      How would you describe yourself in one word?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>
                      What really drives results in this job?{" "}
                    </h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="Knowledge"
                            control={<StyledRadio />}
                            label="Knowledge"
                          />
                          <FormControlLabel
                            value="money"
                            control={<StyledRadio />}
                            label="Money"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>Would You Rather Be ? </h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="Able To Control Time"
                            control={<StyledRadio />}
                            label="Able To Control Time"
                          />
                          <FormControlLabel
                            value="Or Be Able To Know What Other People Are Thinking"
                            control={<StyledRadio />}
                            label="Or Be Able To Know What Other People Are Thinking"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>Do they like ?</h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="to take a stand"
                            control={<StyledRadio />}
                            label="to take a stand"
                          />
                          <FormControlLabel
                            value="or just let things go"
                            control={<StyledRadio />}
                            label="or just let things go"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If You Could Change Your Name, What Would You Change It
                      To?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      Do You Care About Reviews?
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>

                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>Pick One ?</h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="Stability"
                            control={<StyledRadio />}
                            label="Stability"
                          />
                          <FormControlLabel
                            value="Spontaneity"
                            control={<StyledRadio />}
                            label="Spontaneity"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h3 className={classes.question}>Do You?</h3>
                    <Box
                      display="flex"
                      justifyContent="start"
                      style={{ marginLeft: "5%" }}
                    >
                      {" "}
                      <FormControl component="fieldset">
                        {/* <FormLabel component="legend">Answer</FormLabel> */}
                        <RadioGroup
                          // defaultValue="yes"
                          // aria-label="answer"
                          name="customized-radios"
                        >
                          <FormControlLabel
                            value="Spend"
                            control={<StyledRadio />}
                            label="Spend"
                          />
                          <FormControlLabel
                            value="Save"
                            control={<StyledRadio />}
                            label="Save"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      If You Could Only remember One person for The Rest Of Your
                      Life, Who Would You Choose? no Family{" "}
                    </h4>
                    <div>
                      <Container>
                        <textarea rows="10" cols="100"></textarea>
                      </Container>
                    </div>
                  </div>
                  <div>
                    <Box display="flex" justifyContent="space-between">
                      <h2 className={classes.subheading1}>TOPIC #2</h2>
                      <h2 className={classes.subheading1}>
                        DURATION : 10 MINS
                      </h2>
                    </Box>
                    <h4 className={classes.question}>
                      What's the best Wi-Fi name you've seen ?
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

export default Carousel2;
