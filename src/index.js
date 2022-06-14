/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Provider} from 'react-redux';
import store from './redux/store';

// Components

import NavLeft from './components/NavLeft';
import Main from './components/Main&Search';
import NavRight from './components/NavRight';

const App = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Provider store={store}>
          <NavLeft />
            <Main />
          <NavRight />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('MainContainer')
);
