import mongoose, { Schema } from "mongoose";
const homeSchema = new Schema({
    home: {
        header: {
            description: {
                type: String,
                required: true,
            },
            first_photo: {
                type: String,
                required: true,
            },
            second_photo: {
                type: String,
                required: true,
            },
        },
        about: {
            photo: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
    },
});
export default mongoose.model("Home", homeSchema);
