const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config({path: __dirname + "/.env"});

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
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Witaj, to jest strona główna!');
  });
  
//   mongoose.connect(
//     process.env.DB_CONNECT,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log("Connected to database")
//   );

app.listen(PORT, () => console.log(`Server is running...`));