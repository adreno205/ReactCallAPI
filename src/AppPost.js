import React, { Component } from 'react';
import logo from './logo.svg';
import jQuery from 'jquery';
import './App.css';

class AppPost extends Component {
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
      headers: { 'Access-Control-Allow-Origin': '*'},
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      url: 'http://localhost:8080/slack/v2/addslack',
      data: '{"text":"bernardddddd"}', 
      success: (comments) => {
      console.log(comments);  
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
          Hello I'm content of the POST API
        </p>
        <div>
          {this.state.comments}
        </div>
      </div>
    );
  }
}

export default AppPost;
