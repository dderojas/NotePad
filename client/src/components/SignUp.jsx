import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Sign Up!</h1>
        <input type="text" placeholder="Enter Username"></input>
        <input type="text" placeholder="Enter Password"></input>
        <button>Sign Up</button>
      </div>
    )
  }

}