import React from 'react';

export default class SignUp extends React.Component {
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

  }

  render() {
    return(
      <div>
        <h1>Sign Up!</h1>
        <input type="text" placeholder="Enter Username" onChange={this.handleChange}></input>
        <input type="text" placeholder="Enter Password" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Sign Up</button>
      </div>
    )
  }

}