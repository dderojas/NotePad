import React from 'react';
import ReacDOM from 'react-dom';
import {BrowserRouter,Route, Router, Link, Switch, Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import Notes from './Notes.jsx';


export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username:"",
      Password:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var {placeholder, value} = e.target;

    this.setState({
      [placeholder]: value
    });
  }

  handleClick(e) {
    this.props.history.push('/notes');
  }

  render() {
    return(
      <div>
        <h1>Log In</h1>
        <input type="text" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
        <input type="text" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>LogIn</button>
      </div>
    )
  }
}