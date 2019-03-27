import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NormalList from './NormalList.jsx';
import ImportantList from './ImportantList.jsx';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importantInput:'',
      normalInput:'',
      importantList:[],
      normalList:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/everything')
    .then((res) => {
      console.log(res,'axios get good');
      this.setState({
        importantList: res.data.imp,
        normalList: res.data.norm
      });
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
    var {name} = e.target;
    var input = {[name]: this.state[name]}
    var path = e.target.className;

    axios.post(`${path}`,input)
    .then((res) => {
      console.log(res, 'success post');
    })
    .catch((err) => {
      console.log(err, 'bad post');
    });

    this.setState({
      [name]:''
    });
  }

  render() {
    var dateObj = new Date();
    var month = dateObj.getMonth()+1;
    var date = dateObj.getDate();
    var year = dateObj.getFullYear();
    var backCover = {
      backgroundImage: `url(https://ya-webdesign.com/images/notepad-background-png-1.png)`,
      backgroundRepeat: `no-repeat`
    }
    return(
      <div>
      <h2>{`${month}/${date}/${year}`}</h2>
        <input name='importantInput' type='text' onChange={this.handleChange} value={this.state.importantInput}></input>
        <button className='/important' name='importantInput' onClick={this.handleClick}>Save Don't Forget Note</button>
        <br></br>
        <input name='normalInput' type='text' onChange={this.handleChange} value={this.state.normalInput}></input>
        <button className='/normal' name='normalInput' onClick={this.handleClick}>Save Normal Note</button>
        <br></br>
        <div style={backCover}>
          <h2>Don't Forget Notes</h2>
          <div>{this.state.importantList.map((vals) => {
            return <ImportantList notes={vals}/>
          })}</div>
          <h2>Normal Notes</h2>
          <div>{this.state.normalList.map((vals) => {
            return <NormalList notes={vals}/>
          })}</div>
        </div>
      </div>
    )
  }
}