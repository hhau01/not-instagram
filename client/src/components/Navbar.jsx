// import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
// import FeedItem from './FeedItem.jsx';
import axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.createPost = this.createPost.bind(this);
  }
  createPost(bodyObj) {
    axios.post('/posts', bodyObj)
    .then(() => this.fetchPosts());
  }
  render() {
    // const postElements = this.state.postsList.reverse().map((x) => {
    //   // return <li>{JSON.stringify(x)}</li>;
    //   return <FeedItem />;
    // });
    return (
      <div id="header">
        <div id="navbar">
          <a href="#"><span id="nav-logo" className="brand-name"></span></a>
          <div id="searchbar">
            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            <input name="url" type="text" placeholder="Search"></input>
          </div>
          <div id="iconbar">
            <a href="#"><span className="icon" id="explore"></span></a>
            <a href="#"><span className="icon" id="likes"></span></a>
            <a href="#"><span className="icon" id="me"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
