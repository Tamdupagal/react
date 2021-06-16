import React, { useState, useRef, useEffect } from "react";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddnewClassroom";
import { useTheme } from "@material-ui/core/styles";
import { Multiselect } from "multiselect-react-dropdown";
// import Classroom from "./../CRUD/Classroom";

const EditClassroom = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [classroom, setClassroom] = useState();
  const classes = useStyles();
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef();
  const [options, setOptions] = useState();
  let arr = [];
  let edit;
  useEffect(() => {
    // console.log(props);
    // console.log(props.editClassroomData._id);
    // edit = props.editClassroomData.enrolled_students;
    // console.log(edit);
    // const keys = Object.keys(edit);
    // console.log(keys);
    // keys.map((c) => arr.push({ label: c }));
    // console.log(arr);
    // setOptions(arr);
    // JSON.stringify(props.editClassroomData.enrolled_courses.map(c=>arr.push(c)))
    // console.log(arr)
  }, []);

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  // const editClassroom = (id) => {
  //   var data = {
  //     name: nameRef.current.value,
  //     courses: ["1", "2", "3"],
  //     students: selectedValue,
  //   };
  //   console.log(id);
  //   console.log(nameRef.current.value);
  //   console.log(selectedValue);
  //   Classroom.update(id, data)
  //     .then((res) => {
  //       setClassroom({
  //         id: res.data.id,
  //         name: res.data.Name,
  //         courses: [1, 2, 3],
  //         students: [1, 2, 3],
  //       });
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //     Window.reload()
  // };

  return (
    <div>
      <div>
        <h1 className={classes.mainHeading}>Add a Classroom</h1>
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
                    // defaultValue={props.editClassroomData.name}
                    // value={props.editClassroomData.name}
                  >
                    {/* {props.editClassroomData.name} */}
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
                    options={options}
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
                  {/* <pre>{JSON.stringify(selectedValue)}</pre> */}
                  <Multiselect
                    options={options}
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
                    // onClick={() => editClassroom(props.editClassroomData._id)}
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
