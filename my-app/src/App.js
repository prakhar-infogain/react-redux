import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <AllPostsComponent />
      </Provider>
      
    );
  }
}

export default App;
