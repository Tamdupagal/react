import React,{useState} from 'react';
import { useStyles } from '../../Styles/SideBar';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import LinkIcon from "@material-ui/icons/Link";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import CreateIcon from "@material-ui/icons/Create";
import FaceIcon from "@material-ui/icons/Face";
import TuneIcon from "@material-ui/icons/Tune";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import { FaUserGraduate } from "react-icons/fa";
import { Button,List } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const drawerWidth = 250;
let shift;
let display;
let contentMargin;

const ListItem = () =>{
    const [activeLink, setActiveLink] = useState(null)

    const classes = useStyles()
    const handleDashboard =() =>{
    toggleMe("dashboard")
  }

  const handleCourses =() =>{
    toggleMe("courses")
  }

  const handleEnroll =() =>{
    toggleMe("enroll")
  }

  const handleMeet =() =>{
    toggleMe("meet")
  }

  const handleClassrooms =() =>{
    toggleMe("classroom")
  }

  const handleTrainers =() =>{
    toggleMe("trainers")
  }

  const handleAttendance =() =>{
    toggleMe("attendances")
  }

  const handleStudents =() =>{
    toggleMe("students")
  }

  const handleStuCourse =() =>{
    toggleMe("StuCourses")
  }

  const handleTeachers =() =>{
    toggleMe("teachers")
  }

  const handleTrainer =() =>{
    toggleMe("trainer")
  }

  const handleOperation =() =>{
    toggleMe("operation")
  }

  const toggleMe = (value) => {
    setActiveLink(value)
  }
    return(

    <List>
            <Link to="/dashboard" 
            className={classes.link}
            >
              <Button startIcon={<ViewQuiltIcon />} onClick={handleDashboard} className={activeLink==="dashboard"? classes.menuBtn:classes.menuBtn2} >
                Dashboard
              </Button>
            </Link>
            <Link to="/courses" 
            className={classes.link}
            >
              <Button startIcon={<ImportContactsIcon />} onClick={handleCourses} className={activeLink==="courses"? classes.menuBtn:classes.menuBtn2}>
                Courses
              </Button>
            </Link>
            <Link to="/enroll" className={classes.link}>
              <Button
                startIcon={<RemoveFromQueueIcon />}
                onClick={handleEnroll} className={activeLink==="enroll"? classes.menuBtn:classes.menuBtn2}              >
                Enrollment
              </Button>
            </Link>
            <Link to="/meetLink" className={classes.link}>
              <Button startIcon={<LinkIcon />} onClick={handleMeet} className={activeLink==="meet"? classes.menuBtn:classes.menuBtn2}>
                Meet Links
              </Button>
            </Link>
            <Link to="/classroom" 
            className={classes.link}
            >
              <Button startIcon={<LocalLibraryIcon />} onClick={handleClassrooms} className={activeLink==="classroom"? classes.menuBtn:classes.menuBtn2}>
                Classrooms
              </Button>
            </Link>
            <Link to="/trainer-classrooms" 
            className={classes.link}
            >
              <Button startIcon={<ViewQuiltIcon />} onClick={handleTrainers} className={activeLink==="trainers"? classes.menuBtn:classes.menuBtn2}>
                Teacher Training
              </Button>
            </Link>
            <Link to="/attendances" className={classes.link}>
              <Button startIcon={<CreateIcon />} onClick={handleAttendance} className={activeLink==="attendances"? classes.menuBtn:classes.menuBtn2}>
                Attendances
              </Button>
            </Link>
            <Link to="/students" className={classes.link}>
              <Button startIcon={<FaceIcon />} onClick={handleStudents} className={activeLink==="students"? classes.menuBtn:classes.menuBtn2}>
                Students
              </Button>
            </Link>
            <Link to="/student-courses" className={classes.link}>
              <Button startIcon={<FaceIcon />} onClick={handleStuCourse} className={activeLink==="StuCourses"? classes.menuBtn:classes.menuBtn2}>
                Student Courses
              </Button>
            </Link>
            <Link to="/teachers" className={classes.link}>
              <Button
                startIcon={<FaUserGraduate />}
                onClick={handleTeachers} className={activeLink==="teachers"? classes.menuBtn:classes.menuBtn2}              >
                Teachers
              </Button>
            </Link>
            <Link to="/trainers" className={classes.link}>
              <Button
                startIcon={<FaUserGraduate />}
                onClick={handleTrainer} className={activeLink==="trainer"? classes.menuBtn:classes.menuBtn2}              >
                Trainers
              </Button>
            </Link>
            <Link to="/operations" className={classes.link}>
              <Button startIcon={<TuneIcon />} onClick={handleOperation} className={activeLink==="operation"? classes.menuBtn:classes.menuBtn2}>
                Operations
              </Button>
            </Link>
          </List>
    )
}

export default ListItem;