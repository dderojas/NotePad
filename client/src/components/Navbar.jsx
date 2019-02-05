import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  render() {
    return(
        <Menu compact>
          <Menu.Item name='LogIn' active={true}/>

          <Menu.Item name='SignUp' active={true}/>
        </Menu>
    )
  }
}