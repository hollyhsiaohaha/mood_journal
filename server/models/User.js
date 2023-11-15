import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    index: true,
    unique: true,
  },
  password: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', UserSchema);
