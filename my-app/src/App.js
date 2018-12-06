import React, { Component } from 'react';
import logo from './logo.svg';
import AllPostsComponent from './components/AllPostsComponent';
import {
  Container,
  Row,
  Col
} from 'mdbreact';
import './App.css';

class App extends Component {
  render() {
    return (
      <AllPostsComponent />
    );
  }
}

export default App;
