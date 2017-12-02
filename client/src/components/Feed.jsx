// import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

let postStore = [];

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: postStore,
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.createPost = this.createPost.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    return axios.get('/posts')
      .then(response => response.data)
      .then(postsList => {
        postStore = postsList;
        this.setState(Object.assign(
          this.state,
          { postsList: postStore }
        ));
        // this.state.postsList.forEach(x => console.log(x._id));
        console.log(this.state.postsList);
      });
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
      <div id="feed" className="center">
        {/* <div className="center">AHHH</div>
        <button onClick={() => this.createPost({ username: 'samuelljackson', img: 'https://avatars3.githubusercontent.com/u/12615402?s=460&amp;v=4', liked: true, likes: 9817383, logo: 'ldsajf;laskdf', caption: 'lkfasj'})}>Hello</button> */}
        {/* <ul className="center">
          {postElements}
        </ul> */}
        {/* Pull all FeedItems */}
        <FeedItem />
      </div>
    );
  }
}

export default Feed;
