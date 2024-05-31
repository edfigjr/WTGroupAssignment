const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");
const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://ejfigueiredo:xrslh8W7IA97u6zG@cluster0.nyl4ckw.mongodb.net/node-angular')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Connection failed:', error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
