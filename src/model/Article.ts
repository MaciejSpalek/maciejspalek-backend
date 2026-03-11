import mongoose, { Document, Schema } from "mongoose";
import { BLOCK_TYPE } from "../helpers";

interface IBlock extends Document {
  title?: string;
  description: string;
  type: string;
  image?: string;
}

interface IArticle extends Document {
  title: string;
  description: string;
  created_at?: Date;
  image: string;
  summary?: string | null;
  blocks: IBlock[];
}

const blockSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: BLOCK_TYPE.COMMON,
  },
  image: {
    type: String,
  },
});

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String || null,
  },
  blocks: {
    type: [blockSchema],
    required: true,
  },
});

export default mongoose.model<IArticle>("Article", articleSchema);