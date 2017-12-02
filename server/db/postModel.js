const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  img: { type: String, required: true },
  logo: { type: String },
  likes: { type: Number, default: 1 },
  caption: { type: String },
  comments: [{
    user: String,
    msg: String,
  }],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
