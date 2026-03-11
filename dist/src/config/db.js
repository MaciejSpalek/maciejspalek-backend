import mongoose from "mongoose";
export const connection = async () => {
    try {
        const connectionParams = {
            auth: {
                username: process.env.MONGO_DB_USER,
                password: process.env.MONGO_DB_PASSWORD,
            }
        };
        await mongoose.connect(process.env.MONGO_DB_URL, connectionParams);
        console.log("Connected to database");
    }
    catch (error) {
        console.log("Could not connect to database, error: ", error);
    }
};
