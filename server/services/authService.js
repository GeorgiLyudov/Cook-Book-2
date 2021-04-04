const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config');

const register = (email, password) => {
  let user = new User({ email, password });
  return user.save();
}
const login = async (email, password) => {
  let user = await User.findOne({ email })

  if (!user) {
    throw { message: 'Invalid user', status: 404 };
  }
  let isCorrect = await bcrypt.compare(password, user.password)
  if (!isCorrect) {
    throw { message: 'Invalid email address or password', status: 404 };
  }
let token = jwt.sign({_id: user._id, email: user.email, isAuth: true}, SECRET);
return token;
};

module.exports = {
  register,
  login,
}