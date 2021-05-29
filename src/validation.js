const Joi = require('@hapi/joi');

// Register
const registerValidation = () => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    phone: {
      mobile: Joi.string().min(6).required(),
    },
    birthday: Joi.date(),
  };
};
