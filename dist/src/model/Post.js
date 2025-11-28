import mongoose, { Schema } from "mongoose";
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
export default mongoose.model("Post", postSchema);
