import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty:''
    }
  }

  render() {
    return(
      <div>
        <h1>NotePad with PostgreSQL</h1>
      </div>
    )
  }
}