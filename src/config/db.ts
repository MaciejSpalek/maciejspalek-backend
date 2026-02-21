import mongoose from "mongoose";

export const connection = async () => {
  try {
    const connectionParams:  mongoose.ConnectOptions = {
      auth: {
        username: process.env.MONGO_DB_USER,
        password: process.env.MONGO_DB_PASSWORD,
      }
    };

    await mongoose.connect(process.env.MONGO_DB_URL as string, connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log("Could not connect to database, error: ", error);
  }
};
