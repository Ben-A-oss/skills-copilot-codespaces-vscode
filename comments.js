// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create an express app
const app = express();
// Parse the body of any request that comes into the app
app.use(bodyParser.json());
// Allow cross-origin resource sharing
app.use(cors());

// Create an empty object to store the comments
const commentsByPostId = {};

// Create a route handler for GET requests to the '/posts/:id/comments' endpoint
app.get('/posts/:id/comments', (req, res) => {
  // Send back the comments associated with the post id
  res.send(commentsByPostId[req.params.id] || []);
});

// Create a route handler for POST requests to the '/posts/:id/comments' endpoint
app.post('/posts/:id/comments', (req, res) => {
  // Create a random id for the comment
  const commentId = randomBytes(4).toString('hex');
  // Get the comment content from the request body
  const { content } = req.body;
  // Get the comments associated with the post id
  const comments = commentsByPostId[req.params.id] || [];
  // Add the new comment to the comments array
  comments.push({ id: commentId, content });
  // Store the comments array in the commentsByPostId object
  commentsByPostId[req.params.id] = comments;

  // Send back the new comment
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});