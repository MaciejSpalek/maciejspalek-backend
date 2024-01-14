const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cors = require("cors");
// const craftRoute = require("./src/routes/craft");
const aboutSectionRoute = require("./src/routes/aboutSection");
const mongoose = require("mongoose");

dotenv.config({ path: __dirname + "/.env" });

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use("/api/craft", craftRoute);
app.use("/api/about-section", aboutSectionRoute);

// mongoose
//   .createConnection(process.env.MONGO_DB_URL, {
//     auth: {
//       username: process.env.MONGO_DB_USER,
//       password: process.env.MONGO_DB_PASSWORD,
//     },
//   })
//   .then(() => {
//     console.log("Connected to db");
//   })
//   .catch((error) => {
//     console.log("Something went wrong", error);
//   });

mongoose
  .connect(process.env.MONGO_DB_URL, {
    auth: { authSource: "admin" },
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASSWORD,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log("Something went wrong", error);
  });

// mongoose.createConnection("mongodb://localhost:27017/dbName", {
//   auth: {
//     authSource: "admin",
//   },
//   user: "admin",
//   pass: "password",
// });

app.listen(PORT, () => console.log(`Server is running...`));
