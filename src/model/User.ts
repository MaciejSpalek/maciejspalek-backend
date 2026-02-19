import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  password: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
});

export default mongoose.model<IUser>("User", userSchema);