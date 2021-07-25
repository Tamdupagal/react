import React,{useState,useEffect, useContext} from 'react';
import {AppContext} from '../AppContext';
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
import {useParams, useHistory , Link} from 'react-router-dom';
import { getAllCourses , getCourseSectionWithId , editCourseSectionOfCourse } from "../action/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';

const EditCourseSection = ({ withoutButton, withoutTitle, styles , courses , course_section}) => {
  const {state,dispatch} = useContext(AppContext);
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  
  const [values, setValues] = useState({
    name: null,
    price: null,
    allCourses: courses,
    one_section: course_section,
    title: '',
    edit_id: params.course_id
  });

  const [editor, setEditor] = useState({
    text: '',
    value: ''
  })

  const [load,setLoad]= useState(false);

  useEffect(async()=>{
    if(!courses){
      getAllCourses(dispatch)
        .then((response)=>{
            getCourseSectionWithId(dispatch , params.course_id , params.section_id)
                .then((res)=>{
                  setEditor({...editor , value: res.description})
                  setValues({...values ,allCourses: response, name: res.name , price: res.price , one_section: res});
                })
                .catch((err)=>{
                })
        })
        .catch((err)=>{
        })
    }
    else {
      setEditor({...editor , value: course_section.description})
      setValues({...values , name: course_section.name , price: course_section.price});
    }
  },[])

  const handleViewMaterialCourse = () => {
    history.push("/course-material");
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };



const change = (content, delta, source, editor) => {
    setEditor(prev=> ({...prev, text: editor.getText(content), value: content}))
}

  // const change = (value) =>{
  //   console.log(value);
  //   setValues({ ...values , description: value})
  // }

  const course_change = (e) => {
    e.preventDefault()
    setValues({...values , edit_id: e.target.value._id})
  }

  const saveChanges = () =>{
    setLoad(true);
    const body = {} ;
    body.price = values.price ;
    body.description = values.description ;
    body.course_id = values.edit_id ;
    body.name = values.name ;
    if(editor.value)
    body.description = editor.value ;

    editCourseSectionOfCourse(dispatch , params.course_id , params.section_id , body)
      .then((res)=>{
        setLoad(false);
        history.push("/courses");
      })
      .catch((err)=>{
        setLoad(false);
        //Something went wrong
      })
  }

  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Container>
          <h1 className={classes.mainHeading}>Edit Course Section</h1>
          <Grid container spacing={3} display="flex" justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>BASIC INFORMATION</h3>
              <Paper className={classes.mainContainer}>
                <h3 className={classes.subheading2}>COURSE SECTION TITLE</h3>
                <TextField
                  id="outlined-basic"
                  placeholder="Course title"
                  onChange={handleChange('name')}
                  variant="outlined"
                  className={classes.textField}
                  value={values.name}
                  // label={course_section ? '' : 'Enter Course Section Title'}
                />
                <h3 className={classes.subheading2}>DESCRIPTION</h3>
                <div className="editor__wrapper" style={styles}>
                  <ReactQuill
                    className="toolBar"
                    theme="snow"
                    // placeholder="Add Content here..."
                    onChange={change}
                    formats={formats}
                    modules={modules}
                    value={editor.value}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Box className={classes.rightContainer}>
                {
                  load && (
                            <CircularProgress style={{marginLeft: '0.8vw' }} size={30}/>
                        )
                        ||
                  !load && 
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ fontFamily: "'Exo', sans-serif" }}
                      onClick={saveChanges}
                    >
                    SAVE CHANGES
                    </Button>
                }
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
                    {
                        values.allCourses &&
                        <Box display="flex" justifyContent="center">
                          <Grid item xs={12} lg={11}>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="countrySelectLabel">Course</InputLabel>
                              <Select 
                                labelId="countrySelectLabel"
                                id="countrySelect" 
                                // value={values.title}
                                onChange={course_change}
                              >
                                {values.allCourses.map((course, index) => (
                                  <MenuItem key={index} value={course}>
                                    {course.title}
                                  </MenuItem>
                                ))}
                              </Select>
                          </FormControl>
                          </Grid></Box>
                    }
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
                    onChange={handleChange('price')}
                    value={values.price}
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

export default EditCourseSection;
