const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  img: { type: String, required: true },
  logo: { type: String, default: '' },
  liked: { type: Boolean, default: false },
  likes: { type: Number, default: 1 },
  caption: { type: String, default: '' },
  comments: [{
    user: String,
    msg: String,
  }],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
