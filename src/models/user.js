const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rol = require('./role');
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  role: { type: Schema.ObjectId, ref: 'Role', default: '', required: false },
  user_workshift: {
    type: String,
    required: true,
  },

  user_status: {
    type: Boolean,
    required: true,
    default: true,
  },
});
module.exports = mongoose.model('User', userSchema);