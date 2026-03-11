import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
  image: string;
  type: string;
  state?: string;
  description: string;
  price?: string;
  created_at: Date;
}

const postSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  created_at: {
    type: Date,
    required: true,
  }
});

export default mongoose.model<IPost>("Post", postSchema);