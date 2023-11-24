import React from 'react';
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Dummy user profile data
const userProfile = {
  name: 'Suvendra Singh',
  email: 'suvendas777@gmail.com',
  // Add more profile data as needed
};

// API endpoint to get user profile
app.get('/api/profile', (req, res) => {
  res.json(userProfile);
});

// API endpoint to update user profile
app.put('/api/profile', (req, res) => {
  // Assuming the new profile data is sent in the request body
  const newProfileData = req.body;

  // Update the user profile
  Object.assign(userProfile, newProfileData);

  res.json(userProfile);
});

// Set up the server to listen on a port (e.g., 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port 5000`);
});
