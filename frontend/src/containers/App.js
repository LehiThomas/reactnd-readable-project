import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "../App.css";

import Header from "../components/Header";
import PostListContainer from "./PostListContainer";
import PostContainer from "../containers/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={PostListContainer} />
              <Route exact path="/:category" component={PostListContainer} />
              <Route exact path="/:category/:id" component={PostContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
