const express = require('express');
const app = express();

// Routes Import
const authRoute = require('./routes/auth');

// Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, console.log('Running.'));
