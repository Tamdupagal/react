import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";
import Enroll from "./Components/Enrollment/Enroll";
import MeetTable from "./Components/MeetLinks/MeetTable";
import TextEditor from "./Components/TextEditor/TextEditor";
import OneToOne from "./Components/Classrooms/OneToOne"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React,{useState} from "react"
import Courses from "./Components/Courses/Courses";
import AddMeet from "./Components/MeetLinks/AddMeet";
import AddStudent from './Components/Students/AddStudent'

function App() {
  const [currentPage, setCurrentPage] = useState()
  // const handleChange = (page) =>{
  //   return <AddMeet/>
  // }
  return (
      <>
      <div>
        
        {/* <Enroll/> */}
        {/* <MeetTable/> */}
        {/* <Dashboard/> */}
        {/* <TextEditor/> */}
        {/* <Table/> */}
        <Router>
        <SideBar />
        <div style={{marginLeft: 250,marginTop:"100px"}}>
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Enroll" component={Enroll}/>
          <Route exact path="/MeetLink" component={MeetTable}/>
          <Route exact path="/Courses" component={TextEditor}/>
          <Route exact path="/Classroom" component={OneToOne}/>
          <Route exact path="/Students" component={OneToOne}/>
          <Route exact path="/Attendances" component={OneToOne}/>
          <Route exact path="/Teachers" component={Courses}/>
          <Route exact path="/add-meet" component={AddMeet}/>
          <Route exact path="/add-student" component={AddStudent}/>
        </Switch>
        </div>
        {/* <div style={{marginLeft: 250}}>
          <h1>CopyRight</h1>
        </div> */}
      </Router>
      </div> 
      </>
  );
}

export default App;
