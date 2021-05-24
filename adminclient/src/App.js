import SideBar from "./Components/SideBar/sideBar";
import { Container} from "react-bootstrap"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div>
        <SideBar className="w-100" style={{ maxWidth:"400px" }} />
      </div>
    </Container>
  );
}

export default App;
