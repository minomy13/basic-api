// Module Imports
const Joi = require('@hapi/joi');

// Register
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    phone: {
      mobile: Joi.string().min(6).required(),
      private: Joi.string().min(6),
      bussiness: Joi.string().min(6)
    },
    birthday: Joi.date(),
  });

  return schema.validate(data);
};

// Login
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// Exports
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
