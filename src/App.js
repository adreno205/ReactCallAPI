import React, { Component } from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      comments: []
    }
  }


  componentWillMount() {
    this.fetchComments();
  }

  fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://api.coindesk.com/v1/bpi/currentprice.json',
      success: (comments) => {
        this.setState({ comments }) }
  }); }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React World :) </h2>
        </div>
        <p className="App-intro">
          Hello I'm content
        </p>
        <div>
          {this.state.comments}
        </div>
      </div>
    );
  }
}

export default App;
