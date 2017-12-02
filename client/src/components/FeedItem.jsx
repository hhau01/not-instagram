// import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Render FeedItem */}
      </div>
    );
  }
}

export default FeedItem;

// `<article class="box">
// <div class="header">
//   <img class="logo" src=${currUserLogo} onerror="this.style.background='darkslategrey'">
//   <span class="username">${currUser}</span>
// </div>
// <div class="box-img">
//   <img src=${img} onerror="this.src='./imgs/404.jpg'">
// </div>
// <div class="bottom-section">
//   <div class="action-bar">
//     <span class="icon like-btn"></span>
//     <span class="icon comment-btn"></span>
//   </div>
//   <div class="like-count">
//     <span class="num-likes">${Math.floor(Math.random() * (49999 - 10 + 1) + 10).toLocaleString()}</span> likes
//   </div>
//   <div class="user-caption">
//     <span class="username">${currUser}</span>
//     <span class="caption">${currUserComment}</span>
//   </div>
//   <div class="comment-list"></div>
//   <div class="time-posted">${Math.floor(Math.random() * (8 - 2 + 1) + 2)} hours ago</div>
//   <div class="comment-bar">
//     <div class="comment-section">
//       <textarea class="add-comment" placeholder="Add a comment..."></textarea>
//       <div class="mospace">
//         <span class="more-btn"></span>
//       </div> 
//     </div>
//   </div>
// </div>
// </article>`