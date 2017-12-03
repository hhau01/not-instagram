// import fetch from 'isomorphic-fetch';
import React, { PropTypes } from 'react';
import FeedItem from './FeedItem.jsx';

const Feed = (props) => {
  const { postsList } = props;

  const postElements = postsList.reverse().map((post) => {
    return <FeedItem key={post.createdAt} username={post.username} img={post.img} logo={post.logo} liked={post.liked} likes={post.likes} caption={post.caption} comments={post.comments} createdAt={post.createdAt} />;
    // return JSON.stringify(post);
  });
  return (
    <div id="feed" className="center">
      {/* <div className="center">AHHH</div> */}
      {/* <button onClick={() => this.createPost({ username: 'samuelljackson', img: 'https://avatars3.githubusercontent.com/u/12615402?s=460&amp;v=4', liked: true, likes: 9817383, logo: 'ldsajf;laskdf', caption: 'lkfasj'})}>Hello</button> */}
      {postElements}
      {/* <ul className="center">
      </ul> */}
      {/* Pull all FeedItems */}
      {/* <FeedItem /> */}
    </div>
  );
};


// FeedItem.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   letter: PropTypes.string,
//   row: PropTypes.number.isRequired,
//   square: PropTypes.number.isRequired
// };

export default Feed;
