const express = require("express");
const app = express();
const EncounterTableRouter = express.Router();

const EncounterTable = require("../models/EncounterTable");

EncounterTableRouter.route("/add").post((req, res) => {
  const encountertable = new EncounterTable(req.body);
  encountertable
    .save()
    .then(encountertable => res.json("Table added successfully."))
    .catch(err => {
      res.status(400).send("Unable to save to database.");
    });
});

EncounterTableRouter.route("/delete/:id").get((req, res) => {
  console.log("Request params: ", req.params);
  EncounterTable.findByIdAndRemove({ _id: req.params.id }),
    (err, table) => {
      if (err) res.json(err);
      else res.json("Successfully removed");
    };
});


EncounterTableRouter.route("/").get((req, res) => {
  EncounterTable.find((err, encountertables) => {
    if (err) {
      console.log(err);
    } else {
      res.json(encountertables);
    }
  });
});

module.exports = EncounterTableRouter;
