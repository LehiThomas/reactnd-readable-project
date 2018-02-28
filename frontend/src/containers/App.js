import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import '../App.css';

import Header from '../components/Header';
import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
          <Route exact path='/' component={PostContainer} />
          <Route exact path='/:category' component={PostContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
