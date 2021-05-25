import SideBar from "./Components/SideBar/sideBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TextEditor from "./Components/TextEditor/TextEditor";

function App() {
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 250 }}>
        <Dashboard />
        {/* <TextEditor /> */}
      </div>
    </div>
  );
}

export default App;
