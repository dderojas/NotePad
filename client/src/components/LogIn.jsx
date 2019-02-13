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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

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
        <input type="text" placeholder="Username" onChange={this.handleChange}/>
        <input type="text" placeholder="Password" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>LogIn</button>
      </div>
    )
  }
}