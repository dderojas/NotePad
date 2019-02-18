import React from 'react';
import LogIn from './LogIn.jsx';
import Notes from './Notes.jsx';
import SignUp from './SignUp.jsx';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // if logged in, go straight to notes page
  }

  render() {
    return(
      <div>
          <Menu>
            <Menu.Item name='LogIn' active={true}>
              <Link to="/logIn">LogIn</Link>
            </Menu.Item>
            <Menu.Item name='SignUp' active={true}>
              <Link to="/signUp">SignUp</Link>
            </Menu.Item>
          </Menu>
          <h1>NOTEPAD APP</h1>
          <Route path="/notes" component={Notes}/>
          <Route path="/logIn" component={LogIn}/>
          <Route path="/signUp" component={SignUp}/>
      </div>
    )
  }
}