const Post = require('./postModel');

module.exports = {
  getPosts: (req, res) => {
    Post.find({}, (err, foundPosts) => {
      if (err) {
        return res.send(err);
      }
      return res.json(foundPosts);
    });
  },
  createPost: (req, res, next) => {
    Post.create({
      username: 'henryau',
      img: 'http://i0.kym-cdn.com/entries/icons/original/000/019/367/gollum_395_394.jpg',
      logo: 'https://avatars3.githubusercontent.com/u/12615402?s=460&v=4',
      caption: '',
      comments: [{ user: 'billy', msg: 'cooool' }, { user: 'bobby', msg: 'so cool' }],
    }).then(next);
  },
};
