const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Config Import
const tokens = require('./config/tokens.json');

// DB Connection
mongoose.connect(tokens.mongodb);

// Routes Import
const authRoute = require('./routes/auth');

// Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, console.log('Running.'));
