import React, { useContext, useEffect } from "react";
import { useState, useRef } from "react";
import { Container } from "@material-ui/core";
import { Button, Card, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./../Styles/AddTeacher";
import { Multiselect } from "multiselect-react-dropdown";
import { addTeacher, getAllCourses } from "../action/actions";
import { AppContext } from "./../AppContext";
import { useHistory, useLocation } from "react-router-dom";
const AddTeacher = () => {
  const classes = useStyles();
  const tName = useRef();
  const tQual = useRef();
  const tEmail = useRef();
  const tMobileNo = useRef();
  const tAltMobileNo = useRef();
  const tAddress = useRef();
  const { dispatch } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = useState([]);
  const location = useLocation()
  let courses = location.state?.courses
  // const courses = []
  // const options = []
  // const [coursesOptions, setCoursesOptions] = useState([])
  let courseOptions= []
  const history = useHistory();

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) =>  ({value:x.value,label:x.label})) : []);
  };

  const handleAddTeacher = () => {
    var data = {
      name: tName.current.value,
      primary_phone_number: tMobileNo.current.value,
      email: tEmail.current.value,
      password: "123445",
      country: "Indiaa",
      zip_code: "898961",
      address: tAddress.current.value,
    };
    console.log(data);

    console.log(selectedValue);
    addTeacher(dispatch, data, selectedValue);
    history.push("/teachers");
  };
  useEffect(async() => {
    // console.log(courseData)
    // console.log(courseData[1])
    // courseData.map(c=>courses.push(c.course_section))
    // console.log(courses[0])
    // courses.map(c=>c.map(data=>options.push({label: data.name, value: data._id})))
    // setCoursesOptions(options)
    if(!courses){
      try {
        courses = await getAllCourses(dispatch)
        // setCoursesOptions(courses)
      }
      catch(err){
        console.log(err)
      }
    }
    courses.map(c=>courseOptions.push({label: c.title, value: c._id}))
  }, [])

  const onFileChange = event => { 
    // Update the state 
    // this.setState({ selectedFile: event.target.files[0] }); 
    console.log("hi")
  }; 
   
  // On file upload (click the upload button) 
  const onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   console.log("clicked")
    // Details of the uploaded file 
    // console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    // axios.post("api/uploadfile", formData); 
  }; 
   


  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}> Add a Teacher</h1>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>
                  Teacher's profile picture:
                </h5>
                <Card
                  style={{
                    maxWidth: "50%",
                    alignItems: "center",
                    padding: "1%",
                    paddingTop: "1%",
                    paddingBottom: "2%",
                  }}
                  className={classes.infoHeading}
                >
                <div> 
                <input type="file" onChange={onFileChange} /> 
                <button onClick={onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
                </Card>
                <h5 className={classes.infoHeading}>Teacher Name:</h5>{" "}
                 <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tName}
                  />
                    </form>
                  </Grid>
                  </Box>
                <h5 className={classes.infoHeading}>Teacher Email:</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tEmail}
                      />
                </form>
                      </Grid>
                    </Box>
                <h5 className={classes.infoHeading}>Phone No.:</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tMobileNo}
                  />
                    </form>
                  </Grid>
                  </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset2} />
              <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>Qualification :</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tQual}
                  />
                    </form>
                  </Grid>
                  </Box>
                <h5 className={classes.infoHeading}>Alt Phone No. :</h5>
                 <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tAltMobileNo}
                  />
                    </form>
                  </Grid>
                  </Box>
                <h5 className={classes.infoHeading}>Teacher Adress:</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tAddress}
                  />
                    </form>
                    </Grid>
                </Box>
                <h5 className={classes.infoHeading}>Courses :</h5>
                <Box display="flex" justifyContent="center">
                  <Grid item xs={12} lg={11}>
                  <Multiselect
                    options={courseOptions}
                    value={selectedValue}
                    onSelect={onSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder=""
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                    />
                    </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.submitBtn}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddTeacher}
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  SUBMIT TEACHER
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AddTeacher;
