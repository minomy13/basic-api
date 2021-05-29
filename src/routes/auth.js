// Module Imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');

// Model Imports
const User = require('../model/User');

// Validation Imports
const { registerValidation } = require('../validation');

// Register
router.post('/register', async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // User Allready There?
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email allready exists.');

  // Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // User Creation
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
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
