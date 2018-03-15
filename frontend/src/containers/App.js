import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "../App.css";

import Header from "../components/Header";
import PostListContainer from "./PostListContainer";
import PostContainer from "./PostContainer";
import NotFound from "./NotFound";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/:category" component={PostListContainer} />
            <Route exact path="/:category/:id" component={PostContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
