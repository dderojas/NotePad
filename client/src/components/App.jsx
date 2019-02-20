import React from 'react';
import LogIn from './LogIn.jsx';
import Notes from './Notes.jsx';
import SignUp from './SignUp.jsx';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:"",
      loggedIn: sessionStorage.getItem('loggedIn')
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    this.checkLogIn = this.checkLogIn.bind(this);
  }

  componentDidMount() {
    console.log('session test', sessionStorage);
    // this.setState({
    //   user:""
    // });
  }

  handleLogOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    this.setState({
      loggedIn: sessionStorage.getItem('loggedIn')
    });
  }

  checkLogIn(e) {
    // e.preventDefault(), why doesn't this work?
    this.setState({
      loggedIn: sessionStorage.getItem('loggedIn')
    });
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
            <Menu.Item name="LogOut" active={true} onClick={this.handleLogOut}>
              <Link to="/logIn" >LogOut</Link>
            </Menu.Item>
            <Menu.Item name={this.state.loggedIn}/>
          </Menu>
          <h1>NOTEPAD APP</h1>
          <Route path="/notes" component={Notes}/>
          <Route path="/logIn" render={props => <LogIn {...props} updateLogin={this.checkLogIn}/>}/>
          <Route path="/signUp" render={props => <SignUp {...props} updateLogin={this.checkLogIn}/>}/>
      </div>
    )
  }
}