const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String },
  gender: { type: String },
  contactNumber: { type: String },
  email: { type: String, required: true, unique: true },
  type: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' },
  username: { type: String, unique: true, sparse: true },
  password: { type: String, required: true },
  address: { type: String },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);