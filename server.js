const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");


require("dotenv").config();

const EncounterTableRouter = require("./routes/EncounterTableRouter");
const TestRouter = require("./routes/TestRouter");



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
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () =>
  console.log("Server running on port " + port)
);
