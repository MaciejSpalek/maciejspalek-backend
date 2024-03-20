const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const connectionParams = {
      auth: { authSource: "admin" },
      user: process.env.MONGO_DB_USER,
      pass: process.env.MONGO_DB_PASSWORD,
    };

    await mongoose.connect(process.env.MONGO_DB_URL, connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log("Could not connect to database, error: ", error);
  }
};
