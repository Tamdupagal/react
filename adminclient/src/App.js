import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";
import Enroll from "./Components/Enrollment/Enroll";
import MeetTable from "./Components/MeetLinks/MeetTable";
import TextEditor from "./Components/TextEditor/TextEditor";
function App() {
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 250 }}>
        {/* <Enroll/> */}
        {/* <MeetTable/> */}
        {/* <Dashboard/> */}
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
