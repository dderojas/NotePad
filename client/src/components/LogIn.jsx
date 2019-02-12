import React from 'react';
import ReacDOM from 'react-dom';
import {BrowserRouter,Route, Router, Link, Switch, Redirect, withRouter} from 'react-router-dom';
import App from './App.jsx';


export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('HEY');
    this.props.history.push('/notes');
  }

  render() {
    console.log('login',this.props.history);
    return(
      <div>
        <h1>Log In</h1>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button onClick={this.handleClick}>LogIn</button>
      </div>
    )
  }
}