import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    tlgid: {
      type: Number,
      required: true,
      unique: true,
    },
        name: {
      type: String,
    },
    
    
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);


