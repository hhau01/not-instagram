// import fetch from 'isomorphic-fetch';
import React, { PropTypes } from 'react';

const FeedItem = (props) => {
  const { username, img, logo, liked, likes, caption, comments, createdAt } = props;
  const commentElements = comments.map((comment) => {
    return (
      <div className="comment">
        <span className="username">{comment.username}</span>
        <span className="caption">{comment.msg}</span>
      </div>
    );
  });
  return (
    <div className="box">
      <div className="header">
        <img className="logo" src={logo} onError="this.style.background='darkslategrey'"></img>
        <span className="username">{username}</span>
      </div>
      <div className="box-img">
        <img src={img} onError="this.src='./../../../assets/imgs/404.jpg'"></img>
      </div>
      <div className="bottom-section">
        <div className="action-bar">
          <span className="icon like-btn"></span>
          <span className="icon comment-btn"></span>
        </div>
        <div className="like-count">
          <span className="num-likes">{likes.toLocaleString()}</span> likes
          </div>
        <div className="user-caption">
          <span className="username">{username}</span>
          <span className="caption">{caption}</span>
        </div>
        <div className="comment-list">
          {commentElements}
        </div>
        <div className="time-posted">3 hours ago</div>
        <div className="comment-bar">
          <div className="comment-section">
            <textarea className="add-comment" placeholder="Add a comment..."></textarea>
            <div className="mospace">
              <span className="more-btn"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FeedItem.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   letter: PropTypes.string,
//   row: PropTypes.number.isRequired,
//   square: PropTypes.number.isRequired
// };

export default FeedItem;
