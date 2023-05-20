import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 100
  },
  address: String,
  age: Number,
  gender: {
    type: String,
    enum: ['male', 'female', 'LGBTQ'],
  },
  isFreeAppUser: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Export the user model
module.exports = mongoose.model('User', userSchema);
