import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './AppContext'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </Router>
 ,
  document.getElementById('root')
);
