import SideNav from './components/SideNav/SideNav'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'
import {createContext, useState} from 'react'
import './App.css';

export const userContext = createContext();

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <Router>
      <userContext.Provider value={{ toggle, setToggle }}>
        <div className="App">
          <SideNav />
          <Main/>
        </div>
    </userContext.Provider>
    </Router>
  );
}

export default App;
