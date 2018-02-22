import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';

import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}
        </p>
      </div>
    );
  }
}

export default App;
