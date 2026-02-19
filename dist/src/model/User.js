import mongoose, { Schema } from "mongoose";
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
export default mongoose.model("User", userSchema);
