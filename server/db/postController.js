const Post = require('./postModel');

module.exports = {
  getPosts: (req, res, next) => {
    Post.find({}, (err, foundPosts) => {
      if (err) {
        return res.send(err);
      }
      console.log(`Found ${foundPosts.length} posts`);
      return res.json(foundPosts);
    });
  },
  createPost: (req, res, next) => {
    Post.create({
      username: req.body.username,
      img: req.body.img,
      logo: req.body.logo,
      liked: req.body.liked,
      likes: req.body.likes,
      caption: req.body.caption,
      comments: req.body.comments,
    }).then((result) => {
      console.log('Post created');
      res.status(200).json(result);
      next();
    });
  },
  // TODO: update: likes, liked, commentList
  updatePost: (req, res, next) => {
    Post.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then((result) => {
        console.log('Post updated');
        res.status(200).json(result);
      });
  },
  deletePost: (req, res, next) => {
    Post.findOne({ _id: req.body._id }).remove().exec()
      .then((result) => {
        console.log('Post deleted');
        res.status(200).json(result);
      });
  },
  deleteAllPosts: (req, res, next) => {
    Post.find({ username: { $ne: 'henryau' } }).remove().exec()
      .then((result) => {
        console.log('All posts deleted');
        res.status(200).json(result);
      });
  },
};
