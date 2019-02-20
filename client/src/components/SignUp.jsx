import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
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
    e.preventDefault();
    var {name, value} = e.target;

    this.setState({
      [name]: value
    });
  }

  handleClick(e) {
    e.preventDefault();
    var currentUser = this.state.Username;
    axios.post('/signUp', this.state)
    .then((res) => {
      console.log('good signUp', res);
      this.props.history.push('/notes');
      sessionStorage.setItem('loggedIn', true);
      this.props.updateLogin(currentUser);
    })
    .catch((err) => {
      console.log('bad signUp', err);
    });

    this.setState({
      Username:"",
      Password:""
    });

  }

  render() {
    return(
      <div>
        <h1>Sign Up!</h1>
        <input type="text" name="Username" placeholder="Enter Username" value={this.state.Username} onChange={this.handleChange}></input>
        <input type="text" name="Password" placeholder="Enter Password" value={this.state.Password} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>SignUp</button>
      </div>
    )
  }

}