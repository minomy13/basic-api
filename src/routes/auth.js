// Module Imports
const router = require('express').Router();
const User = require('../model/User');

// Validation Imports
const { registerValidation } = require('../validation');

// Register
router.post('/register', async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // User Creation
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: {
      mobile: req.body.phone.mobile,
    },
    birthday: new Date(req.body.birthday),
  });

  // Saving User
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
