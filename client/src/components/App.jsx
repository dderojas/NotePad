import React from 'react';
import LogIn from './LogIn.jsx';
import Notes from './Notes.jsx';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <Menu>
            <Menu.Item name='LogIn' active={true}>
              <Link to="/logIn">LogIn</Link>
            </Menu.Item>
            <Menu.Item name='SignUp' active={true}/>
          </Menu>
          <Route path="/notes" component={Notes}/>
          <Route path="/logIn" component={LogIn}/>
      </div>
    )
  }
}