import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    tlgid: {
      type: Number,
      required: true,
      unique: true,
    },
    jbid: {
      type: Number,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      default: 'manager'
    }
    
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);

