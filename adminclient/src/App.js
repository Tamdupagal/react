import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TextEditor from "./Components/TextEditor/TextEditor";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <SideBar className="w-100" style={{ maxWidth: "400px" }} />
      <Dashboard />
      <TextEditor />
    </div>
  );
}

export default App;
