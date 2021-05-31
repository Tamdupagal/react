import SideNav from './components/SideNav/SideNav'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import {useEffect} from 'react'
import './App.css';


function App() {
  useEffect(()=>{
        <Redirect from="/" to="/dashboard"></Redirect>
  }, [])
  return (
    <Router>
        <div className="App">
          <SideNav />
          <Main/>
        </div>
    </Router>
  );
}

export default App;
