import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <SideBar className="w-100" style={{ maxWidth: "400px" }} />
        <Dashboard />
      </div>
    </Container>
  );
}

export default App;
