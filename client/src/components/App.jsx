import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty:''
    }
  }

  componentDidMount() {
    axios.get('/test')
    .then((res) => {
      console.log(res,'axios get good');
    })
    .catch((error) => {
      console.log(error,'axios get bad');
    });
  }

  render() {
    return(
      <div>
        <h1>NotePad with PostgreSQL</h1>
      </div>
    )
  }
}