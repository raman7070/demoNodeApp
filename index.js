// Import the Express module
const express = require('express');

// Create a new Express application
const app = express();

// Define a route for the GET request to '/'
app.get('/', (req, res) => {
  // Send the response 'Hello World!'
  res.send('Hello World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
