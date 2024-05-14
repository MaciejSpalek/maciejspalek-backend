require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const craftRoute = require("./src/routes/craft");
const imageRoute = require("./src/routes/image");
const postRoute = require("./src/routes/post");
const connection = require("./src/config/db");
const homeRoute = require("./src/routes/home");
const mailRoute = require("./src/routes/mailer");
const authRoute = require("./src/routes/auth");

const cors = require("cors");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", process.env.WEB_URL],
  })
);

app.use(express.json({ limit: "100mb" }));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/home", homeRoute);
app.use("/api/craft", craftRoute);
app.use("/api/image", imageRoute);
app.use("/api/post", postRoute);
app.use("/api/email", mailRoute);
app.use("/api/auth", authRoute);
app.use("/images", express.static("images"));

connection();

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}...`));
