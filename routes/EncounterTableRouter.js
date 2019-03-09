const express = require("express");
const app = express();
const EncounterTableRouter = express.Router();

const EncounterTable = require("../models/EncounterTable");

EncounterTableRouter.route("/add").post((req, res) => {
  console.log(`Router: Attempting to add table ${req.params.id} to DB`);
  const encountertable = new EncounterTable(req.body);
  encountertable
    .save()
    .then(encountertable => res.json("Table added successfully."))
    .catch(err => {
      res.status(400).send("Unable to save to database.");
    });
});

// define delete route
EncounterTableRouter.route("/delete/:id").get((req, res) => {
  console.log(`Router: Attempting to delete table XXX from DB`);
  EncounterTable.findByIdAndRemove({ _id: req.params.id }, (err, encTable) => {
    if (err) {
      res.json(err);
    } else {
      res.json("MonsterBase: Entry successfully removed.");
    }
  });
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
