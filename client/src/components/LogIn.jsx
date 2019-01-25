import React from 'react';
import ReacDOM from 'react-dom';
import {BrowserRouter,Route, Router, Link, Switch} from 'react-router-dom';
import App from './App.jsx';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <div>
        <h1>Log In</h1>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button>
          <Link to="/notes">Log In</Link>
        </button>
        <button>Sign Up</button>
        <Route path="/notes" component={App}/>
        </div>
      </BrowserRouter>
    )
  }
}