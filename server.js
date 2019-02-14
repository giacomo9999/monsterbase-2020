const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.use("/test", TestRouter);
app.use("/encountertable", EncounterTableRouter);
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);

// Test server below works OK with the two 'cors' lines commented out--but with those two lines active, requests to the '/' endpoint -- either by Postman or a browser-- just don't get a response.

// const express = require("express");
// const app = express();
// const port = 3000;

// const cors = require("cors");
// app.use(cors);

// app.get("/", (req, res) => res.send("Hello World!"))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
