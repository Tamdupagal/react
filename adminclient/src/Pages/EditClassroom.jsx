import React, { useState, useRef, useEffect, useContext } from "react";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "../Styles/AddnewClassroom";
import { useTheme } from "@material-ui/core/styles";
import { Multiselect } from "multiselect-react-dropdown";
import { AppContext } from "../AppContext";
import { editClassroom, getAllClassrooms } from "../action/actions";
import { useHistory } from "react-router-dom";
import axios from "../axios";

const EditClassroom = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [classroom, setClassroom] = useState();
  const classes = useStyles();
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef();
  const [studentOptions, setStudentOptions] = useState();
  const { state, dispatch } = useContext(AppContext)
  const history = useHistory()
  let data = state.classroomEditData.data
  let students = [];
  useEffect(() => {
    // console.log(props);
    // console.log(props.editClassroomData._id);
    // edit = state.classroomEditData.data.enrolledStudents;
    // console.log(edit);
    console.log(data)
    Object.keys(data.enrolled_students).map((c) => students.push({ label: c }));
    setStudentOptions(students);
    console.log(students)
    
  }, []);

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleEditClassroom = (id) => {
    var data = {
      name: nameRef.current.value,
      enrolled_courses: ["1", "2", "3"],
      enrolled_students: selectedValue,
    };
    console.log(id);
    console.log(nameRef.current.value);
    console.log(selectedValue);
    
    console.log(id)
    // axios.put(`/classroom/update/${id}`, data)
    editClassroom(dispatch,data,id)
    history.push("/classroom")
    // getAllClassrooms(dispatch)
      
  };

  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Edit Classroom</h1>
      </div>
      <Container>
        <div>
          <Grid className={classes.container}>
            <Grid item xs={12} lg={9}>
              <Card>
                <h5 className={classes.infoHeading}>Classroom Name:</h5>
                <form>
                  <TextField
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={nameRef}
                    // defaultValue={state.classroomEditData.data.name}
                  >
                  </TextField>
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
                    options={studentOptions}
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
                    options={studentOptions}
                    value={selectedValue}
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
                  <TextField
                    variant="outlined"
                    size="small"
                    select
                    inputRef={courseRef}
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
                    onClick={()=>handleEditClassroom(data._id)}
                  >
                    Edit Classroom
                  </Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default EditClassroom;
