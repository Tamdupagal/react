import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
<<<<<<< HEAD
import {AppContextProvider} from './AppContext'

=======
import {AppContextProvider} from "./AppContext"
>>>>>>> cac241e677fbea69722d517c2741de580bbeeb4a

ReactDOM.render(
  <AppContextProvider>  
            <App />
</AppContextProvider>,
  document.getElementById('root')
);

