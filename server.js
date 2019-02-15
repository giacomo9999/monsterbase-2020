const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const EncounterTableRouter = require("./routes/EncounterTableRouter");
const TestRouter = require("./routes/TestRouter");

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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/test", TestRouter);
app.use("/encountertable", EncounterTableRouter);
// app.get('/', (req, res) => res.send('Hello World!'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build"));
});

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
