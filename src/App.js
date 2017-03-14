import React, { Component } from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
      test: [],
      text: [
        {
          "string": "In",
          "alignment": 2
        }, 
        {
          "string": "New York State", 
          "alignment": 1
        }
      ]
    }
  }

  componentWillMount() {
    this.fetchComments();
  }

  componentDidMount() {
    this.fetchTest();
  }

  fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://api.coindesk.com/v1/bpi/currentprice/THB.json',
      success: (comments) => {
        comments: JSON.stringify(this.state.comments,null,4)
        this.setState({ comments }) }
  }); }

  fetchTest() {
    const uri = `http://api.coindesk.com/v1/bpi/currentprice/THB.json`

    fetch(`${uri}`, {
      mode: 'cors',
    })
    .then(response => response.json())
    .then((test) => {
      this.setState({
        test,
      })
    })
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React World :) </h2>
        </div>

        <div>
        <div><h2>This is ready JSON Text</h2></div>
        <div>
          <pre>{JSON.stringify(this.state.text,null,4)}</pre>
        </div>          
        <div><h2>This is JSON @ WillMount</h2></div>
          <pre>{this.state.comments}</pre>
        </div>
        <div><h2>This is pretty JSON @ DidMount</h2></div>
        <pre>{JSON.stringify(this.state.test,null,4)}</pre>
      </div>
    );
  }
}

export default App;
