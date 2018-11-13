import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange(e) {
    e.preventDefault();
    var {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleClick(e) {
    e.preventDefault();
    var input = Object.assign({}, this.state);
    axios.post('/postTest',input)
    .then((res) => {
      console.log(res, 'success post');
    })
    .catch((err) => {
      console.log(err, 'bad post');
    });

    this.setState({
      important:''
    });
  }

  render() {
    return(
      <div>
        <h1>NotePad with PostgreSQL</h1>
        <input name='important' type='text' onChange={this.handleChange} value={this.state.important}></input>
        <button onClick={this.handleClick}>Save Important</button>
      </div>
    )
  }
}