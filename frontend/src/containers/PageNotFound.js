import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>404.. This page is not found!</h1>
        <Link to="/">Return Home</Link>
      </div>
    );
  }
}

export default PageNotFound;
