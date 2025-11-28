import mongoose, { Schema } from "mongoose";
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
export default mongoose.model("Craft", craftSchema);
