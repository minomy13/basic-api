// Module Imports
const jwt = require('jsonwebtoken');

// Config Import
const tokens = require('./config/tokens.json');

module.exports = function auth(req, res, next) {
  // Check For Token
  const token = req.header.authentication;
  if (!token) return res.status(401).send('Access denied.');

  // Verify
  try {
    const verified = jwt.verify(token, tokens.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};
