import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import Login from '../Login';
import Home from '../Home';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
