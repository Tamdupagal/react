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
import { addClassroom, getAllClassrooms, getAllCourses, getAllStudents, getAllTeachers } from "../action/actions";
import { useHistory, useLocation } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';


const AddNewClassroom = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef();
  const history = useHistory();
  const [teacherId,setTeacherId] = useState([])
  const data=[1,2,3,4]
  let teacherData

  const [studentSelectedValue, setStudentSelectedValue] = useState([]);
  const [courseSelectedValue, setCourseSelectedValue] = useState([]);
  const classes = useStyles();
  const location = useLocation()
  let courses = location.state?.courses
  const [allTeachers, setAllTeachers] = useState([])
  const [allStudents, setAllStudents] = useState([])
  const courseOptions = []
  let teachers=location.state?.teachers;
  const [coursesOptions, setCoursesOptions] = useState()
  let teacherOptions = []
  let studentOptions = []
  let students;
 
  useEffect(async() => {
    console.log(courses)
    if(!courses){
      try {
        courses = await getAllCourses(dispatch)
      }
      catch(err){
        console.log(err)
      }
    }
    if(!teachers){
      try {
        teachers= await getAllTeachers(dispatch)
        teachers.map(c=>teacherOptions.push(c.personelDetails))
        setAllTeachers(teacherOptions)
        // console.log
      }
      catch(err){
        console.log(err)
      }
    }
    if(!students){
      try {
       students = await getAllStudents(dispatch)
      //  students.map(c=>studentOptions.push(c.name))
        setAllStudents(studentOptions)
        console.log(students)
      }
      catch(err){
        console.log(err)
      }
    }
    students.map(c=>studentOptions.push({label:c.name,value:c._id}))
    courses.map(c=>courseOptions.push({label: c.title, value: c._id}))
  }, []);

  const onCourseSelect = (e) => {
    setCourseSelectedValue(Array.isArray(e) ? e.map((x) => ({key:x.value})) : []);
  };
  const onStudentSelect = (e) => {
    setStudentSelectedValue(Array.isArray(e) ? e.map((x) => ({key:x.value,value:x.label})) : []);
  };

  const handleChange = (e) => {
    e.preventDefault()
    setTeacherId(e.target.value._id)
  }

  const saveClassroom = () => {
    var data = {
      name: nameRef.current.value,
      enrolled_courses: {courseSelectedValue},
      enrolled_students: {studentSelectedValue},
      teachers: [teacherId]
    };
    console.log(nameRef.current.value);
    // console.log(selectedValue);
    addClassroom(dispatch, data);
    history.push("/classroom");
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
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  <TextField
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={nameRef}
                    // style={{ height: "5px" }}
                  />
                    </form>
                    </Grid>
                  </Box>
                <h5 className={classes.infoHeading}>Assign Course:</h5>
                
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                  <Multiselect
                    options={courseOptions}
                    value={courseSelectedValue}
                    onSelect={onCourseSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder="select"
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                    />
                    </Grid>
                </Box>
                <h5 className={classes.infoHeading}>Assign Students:</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                  <Multiselect
                    options={studentOptions}
                    value={studentSelectedValue}
                    onSelect={onStudentSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder=""
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                    />
                    </Grid>
                </Box>
                <h5 className={classes.infoHeading}>Assign Teacher:</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {
                     (
                  <Select
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    className={classes.textField}
                    defaultValue=""
                  >
                    {
                      allTeachers.map((teacher, index) => (
                          <MenuItem key={index} value={teacher}>
                            {teacher.name}
                          </MenuItem>
                        ))
                    }
                  </Select>
                    )
                  }
                    </form>
                    </Grid>
                </Box>
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
