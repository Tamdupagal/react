import SideNav from './components/SideNav/SideNav'
import Main from './components/Main/Main'
import { BrowserRouter as Router} from 'react-router-dom'
import Form from './components/Feedback/Form'
import './App.css';


function App() {
  
  return (
    <Router>
        <div className="App">
          <SideNav />
          <Main/>
          <Form/>
      </div>
    </Router>
  );
}

export default App;
