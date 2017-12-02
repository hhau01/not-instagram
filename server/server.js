const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

const postController = require('./db/postController');

mongoose.connect('mongodb://localhost/not-instagram');
mongoose.connection.once('open', () => {
    console.log('Connected with Not-Instagram Database');
});

app.use(express.static(__dirname + '/../'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

app.get('/test', postController.createPost, postController.getPosts);

app.listen(port);
console.log(`Server started on PORT:${port}`);