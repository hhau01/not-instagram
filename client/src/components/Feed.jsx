import React, { PropTypes } from 'react';
import FeedItem from './FeedItem.jsx';

const Feed = (props) => {
  const { postsList } = props;

  const postElements = postsList.reverse().map((post) => {
    return (
      <FeedItem
        key={post.createdAt}
        username={post.username}
        img={post.img}
        logo={post.logo}
        liked={post.liked}
        likes={post.likes}
        caption={post.caption}
        comments={post.comments}
        createdAt={post.createdAt}
      />);
  });
  return (
    <div id="feed" className="center">
      {postElements}
    </div>
  );
};


Feed.propTypes = {
  postsList: PropTypes.array,
};

export default Feed;
