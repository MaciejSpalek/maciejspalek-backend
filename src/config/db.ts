import mongoose from "mongoose";

export const connection = async () => {
  try {
    const connectionParams = {
      auth: {
        authSource: "admin" ,
      },
      user: process.env.MONGO_DB_USER,
      pass: process.env.MONGO_DB_PASSWORD,
    };

    // @ts-ignore
    await mongoose.connect(process.env.MONGO_DB_URL as string, connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log("Could not connect to database, error: ", error);
  }
};
