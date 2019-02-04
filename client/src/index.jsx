import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';
import LogIn from './components/LogIn.jsx';

ReactDOM.render(
  <BrowserRouter>
    <LogIn />
  </BrowserRouter>, document.getElementById('app'));