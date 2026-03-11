import mongoose, { Schema } from "mongoose";
import { BLOCK_TYPE } from "../helpers";
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
export default mongoose.model("Article", articleSchema);
