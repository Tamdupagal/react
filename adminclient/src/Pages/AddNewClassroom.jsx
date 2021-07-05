import React, { useState, useRef, useEffect, useContext } from "react";
import { Container } from "@material-ui/core";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddnewClassroom";
import { useTheme } from "@material-ui/core/styles";
import { Multiselect } from "multiselect-react-dropdown";
import { AppContext } from "../AppContext";
import { addClassroom, getAllClassrooms, getAllCourses } from "../action/actions";
import { useHistory, useLocation } from "react-router-dom";

const AddNewClassroom = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef();
  const history = useHistory();

  const [selectedValue, setSelectedValue] = useState([]);
  const classes = useStyles();
  const location = useLocation()
  let courseData = location.state.courses
  const courses = []
  const options = []
  const [coursesOptions, setCoursesOptions] = useState([])
 
  useEffect(() => {
    console.log(selectedValue);
    console.log(courseData)
    console.log(courseData[1])
    courseData.map(c=>courses.push(c.course_section))
    console.log(courses[0])
    courses.map(c=>c.map(data=>options.push({label: data.name, value: data._id})))
    setCoursesOptions(options)
  }, []);

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => ({key:x.value,value:x.label})) : []);
  };

  const saveClassroom = () => {
    var data = {
      name: nameRef.current.value,
      enrolled_courses: {selectedValue},
      enrolled_students: ["1", "2", "3"],
    };
    console.log(nameRef.current.value);
    console.log(selectedValue);
    addClassroom(dispatch, data);
    // history.push("/classroom");
  };

  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Add a Classroom</h1>
      </div>
      <Container>
        <div>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={9}>
              <Card>
                <h5 className={classes.infoHeading}>Classroom Name:</h5>
                <form>
                  <TextField
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={nameRef}
                    // style={{ height: "5px" }}
                  />
                </form>
                <h5 className={classes.infoHeading}>Assign Course:</h5>
                {/* <form> */}{" "}
                {/* <Select
                  variant="outlined"
                  size="small"
                  select
                  // ref={courseRef}
                  // onchange={handleChange}
                  className={classes.textField}
                >
                  <MenuItem value={1}>interview</MenuItem>
                  <MenuItem value={2}>hello</MenuItem>
                  <MenuItem value={3}>hola</MenuItem>
                </Select> */}
                <Container>
                  <Multiselect
                    options={coursesOptions}
                    value={selectedValue}
                    onSelect={onSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder=""
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                  />
                </Container>
                {/* </form> */}
                <h5 className={classes.infoHeading}>Assign Students:</h5>
                {/* <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    inputRef={studentRef}
                    className={classes.textField} 
                  />
                </form> */}
                <Container>
                  <Multiselect
                    options={coursesOptions}
                    // value={selectedValue}
                    onSelect={onSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder=""
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                  />
                </Container>
                <h5 className={classes.infoHeading}>Assign Teacher:</h5>
                <form>
                  {/* {" "} */}
                  <TextField
                    variant="outlined"
                    size="small"
                    select
                    inputRef={courseRef}
                    // onChange={handleChange}
                    className={classes.textField}
                  >
                    <MenuItem value={"interview"}>interview</MenuItem>
                    <MenuItem value={"hii"}>hii</MenuItem>
                    <MenuItem value={"hello"}>hello</MenuItem>
                    <MenuItem value={"hola"}>hola</MenuItem>
                  </TextField>
                </form>
                <div className={classes.submitBtn}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={saveClassroom}
                    style={{ fontFamily: "'Exo', sans-serif" }}
                  >
                    SUBMIT CLASSROOM
                  </Button>
                </div>
              </Card>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};
export default AddNewClassroom;
