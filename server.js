const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// const PORT = 4000;
require("dotenv").config();

mongoose.connect(process.env.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected to mLab database.");
  },
  err => {
    console.log("Cannot connect to mLab database.");
  }
);

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
