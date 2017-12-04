// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

const postController = require('./db/postController');

mongoose.connect('mongodb://localhost/not-instagram');
mongoose.connection.once('open', () => {
    console.log('\nConnected with Not-Instagram Database');
});

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname + '/../index.html'));
// });

app.get('/posts', postController.getPosts);
app.post('/posts', postController.createPost);
app.put('/posts', postController.updatePost);
app.delete('/posts', postController.deletePost);
app.delete('/dropall', postController.deleteAllPosts);

app.listen(port);
console.log(`Server started on PORT:${port}`);
