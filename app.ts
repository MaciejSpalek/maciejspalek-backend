import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: __dirname + "/.env" });

import craftRoute from "./src/routes/craft";
import imageRoute from "./src/routes/image";
import postRoute from "./src/routes/post";
import homeRoute from "./src/routes/home";
import mailRoute from "./src/routes/mailer";
import authRoute from "./src/routes/auth";
import articleRoute from "./src/routes/article";
import  { connection } from"./src/config/db";
import { DOMAINS } from "./src/helpers"

const app = express();

app.use(
  cors({
    credentials: true,
    origin: DOMAINS,
  })
);

app.use(express.json({ limit: "10mb" }));

app.use((_: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
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
app.use("/api/article", articleRoute);

app.use("/images", express.static("images"));

connection();

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
