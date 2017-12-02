// import fetch from 'isomorphic-fetch';
import React, { PropTypes } from 'react';

const FeedItem = (props) => {
  const { handleClick, letter, row, square } = props;

  return (
    <div className="box">
      <div className="header">
        <img className="logo" src="https://avatars3.githubusercontent.com/u/12615402?s=460&amp;v=4" onError="this.style.background='darkslategrey'"></img>
        <span className="username">henryau</span>
      </div>
      <div className="box-img">
        <img src="http://i0.kym-cdn.com/entries/icons/original/000/019/367/gollum_395_394.jpg" onError="this.src='./../../../assets/imgs/404.jpg'"></img>
      </div>
      <div className="bottom-section">
        <div className="action-bar">
          <span className="icon like-btn"></span>
          <span className="icon comment-btn"></span>
        </div>
        <div className="like-count">
          <span className="num-likes">8,218</span> likes
          </div>
        <div className="user-caption">
          <span className="username">henryau</span>
          <span className="caption">Me</span>
        </div>
        <div className="comment-list"></div>
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
