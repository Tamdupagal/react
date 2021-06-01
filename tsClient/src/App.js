import SideNav from './components/SideNav/SideNav'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Form from './components/Feedback/Form'
import {context} from './store/Context'
import './App.css';


function App() {
  // const { toggleForm } = useContext(context);
  useEffect(()=>{
        <Redirect from="/" to="/dashboard"></Redirect>
  }, [])
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
