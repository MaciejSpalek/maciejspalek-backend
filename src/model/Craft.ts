import mongoose, { Document, Schema } from "mongoose";

interface ICraft extends Document {
  href: string;
  title: string;
  image: string;
  type: string;
}

const craftSchema = new Schema({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ICraft>("Craft", craftSchema);