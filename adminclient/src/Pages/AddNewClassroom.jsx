import React, { useState, useRef, useEffect } from "react";
import { Container } from "@material-ui/core";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddnewClassroom";
import { useTheme } from "@material-ui/core/styles";
import { Multiselect } from "multiselect-react-dropdown";
import Classroom from "./../CRUD/Classroom";

const AddNewClassroom = () => {
  const nameRef = useRef();
  const courseRef = useRef();
  const studentRef = useRef();
  const newClassroomState = {
    id: "null",
    Name: "",
    Course: "",
    Teacher: "",
    Students: "",
  };
  const options = [
    { label: "Fever", value: 1, category: "cat 1" },
    { label: "Head-ache", value: 2, category: "cat 2" },
    { label: "Runny-nose", value: 3, category: "cat 1" },
    { label: "Ear-pain", value: 4, category: "cat 1" },
    { label: "Body-pain", value: 5, category: "cat 2" },
    { label: "Cough", value: 6, category: "cat 1" },
  ];
  useEffect(() => {
    console.log(selectedValue);
  }, []);

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  const [classroom, setClassroom] = useState(newClassroomState);

  const [selectedValue, setSelectedValue] = useState([]);
  const classes = useStyles();

  const saveClassroom = () => {
    var data = {
      name: nameRef.current.value,
      courses: ["1", "2", "3"],
      students: selectedValue,
    };

    console.log(nameRef.current.value);
    console.log(selectedValue);
    Classroom.create(data)
      .then((res) => {
        setClassroom({
          id: res.data.id,
          name: res.data.Name,
          courses: [1, 2, 3],
          students: [1, 2, 3],
        });
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
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
