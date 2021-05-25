import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 250 }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
