// Module Imports
const router = require('express').Router();

// Verification Import
const verify = require('../middleware/verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    servers: {
      api: 'UP',
    },
  });
});

module.exports = router;
