// import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Feed from './Feed.jsx';

let postStore = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: postStore,
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.deletePosts = this.deletePosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.handleForm = this.handleForm.bind(this);
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
  deletePosts() {
    axios.delete('/dropall')
      .then(() => this.fetchPosts());
  }
  createPost(bodyObj) {
    axios.post('/posts', bodyObj)
    .then(() => this.fetchPosts());
  }
  handleForm(user, value) {
    console.log('user', user);
    console.log('value', value);
    this.createPost({ username: user, url: value });
    //  = '';
    // event.preventDefault();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.createPost({ username: 'samuelljackson', img: 'http://a.fod4.com/images/user_photos/1261160/d615e236496311f61c43e71edb0577b3_original.jpg', liked: true, likes: 981137383, logo: 'http://www.indiewire.com/wp-content/uploads/2014/02/samuel-l-jackson.jpg', caption: 'Muthafucking Siri' })}>Boop</button>
        <button onClick={() => this.deletePosts()}>KillAll</button>
        <Navbar handleForm={this.handleForm} />
        <Feed postsList={this.state.postsList} />
      </div>
    );
  }
}

export default App;
