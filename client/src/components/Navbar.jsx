import React from 'react';
import LogIn from './LogIn.jsx';
import App from './App.jsx';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  render() {
    return(
      <div>
          <Menu className="link">
            <Menu.Item name='LogIn' active={true}>
              <Link to="/logIn">LogIn</Link>
            </Menu.Item>
            <Menu.Item name='SignUp' active={true}/>
          </Menu>
          <Route exact path="/notes" component={App}/>
          <Route path="/logIn" component={LogIn}/>
      </div>
    )
  }
}