// import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Feed from './Feed.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Feed />
      </div>
    );
  }
}

export default App;
