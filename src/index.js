// Module Import
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Config Import
const tokens = require('./config/tokens.json');

// Routes Import
const statusRoute = require('./routes/status');
const authRoute = require('./routes/auth');

// DB Connection
mongoose.connect(
  tokens.MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('DB connected.');
  }
);

// Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/status', statusRoute);
app.use('/api/user', authRoute);

app.listen(3000, console.log('Running.'));
