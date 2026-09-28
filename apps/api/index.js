// Load environment variables as early as possible
require('dotenv').config();

const express = require('express');
const app = express();

// Use the PORT variable from process.env, falling back to 5000
const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend is running!',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});