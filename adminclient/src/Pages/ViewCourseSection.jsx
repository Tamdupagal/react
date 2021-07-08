import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "./../Components/Courses/AddCourse.css";
import { Button, Card, CardHeader } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BiRupee } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";
import { Box, Container, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../Styles/AddCourse";
import formats from "../Helpers/formats";
import modules from "../Helpers/modules";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ViewCourseSection = ({ withoutButton, withoutTitle, styles }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleViewMaterialCourse = () => {
    history.push("/course-material");
  };
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Container>
          <Grid container spacing={3} display="flex" justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>BASIC INFORMATION</h3>
              <Paper className={classes.mainContainer}>
                <h3 className={classes.subheading2}>COURSE SECTION TITLE</h3>
                <TextField
                  id="outlined-basic"
                  placeholder="Course title"
                  variant="outlined"
                  className={classes.textField}
                />
                <h3 className={classes.subheading2}>DESCRIPTION</h3>
                <div className="editor__wrapper" style={styles}>
                  <ReactQuill
                    className="toolBar"
                    theme="snow"
                    placeholder="Add Content here..."
                    formats={formats}
                    modules={modules}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Box className={classes.rightContainer}>
                <Link
                  to="/edit-course-section"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ fontFamily: "'Exo', sans-serif" }}
                  >
                    EDIT CHANGES
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.materialBtn}
                  onClick={handleViewMaterialCourse}
                >
                  VIEW COURSE MATERIAL
                </Button>
              </Box>
              <h3 className={classes.subheading1}>OPTIONS</h3>
              <Divider className={classes.dividerInset4} />

              <Card className={classes.rightContainer1}>
                <h3 className={classes.subheading3}>COURSE</h3>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    helperText="Select a section"
                    select
                    className={classes.textField}
                  >
                    <MenuItem value={"hii"}>hii</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>
                <Card className={classes.rightContainer1}>
                  <form>
                    <input type="file" name="picture" />
                  </form>
                </Card>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    PRICE
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">
                        <BiRupee />
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default ViewCourseSection;
