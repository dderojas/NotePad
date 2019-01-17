import React from 'react';
import ReacDOM from 'react-dom';
import {BrowserRouter,Route, Router, Link} from 'react-router-dom';
import App from './App.jsx';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <div>
        <h1>Sign In</h1>
        <Link to="/notes">TEST</Link>
        <Route path="/notes" component={App}/>
        </div>
      </BrowserRouter>
    )
  }
}