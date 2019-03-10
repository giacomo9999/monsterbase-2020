const express = require("express");
const app = express();
const EncounterTableRouter = express.Router();

const EncounterTable = require("../models/EncounterTable");


// "Add" route
EncounterTableRouter.route("/add").post((req, res) => {
  const encountertable = new EncounterTable(req.body);
  console.log("Router: adding new table: ", encountertable);
  encountertable
    .save()
    .then(encountertable => res.json("Router says: Table added successfully"))
    .catch(err => {
      res.status(400).send("Unable to save to database.");
    });
});

// "Delete" route
EncounterTableRouter.route("/delete/:id").get((req, res) => {
  console.log(`Router: Attempting to delete table ${req.params.id} from DB`);
  EncounterTable.findByIdAndRemove({ _id: req.params.id }, (err, encTable) => {
    if (err) {
      res.json(err);
    } else {
      res.json("MonsterBase: Entry successfully removed.");
    }
  });
});

// "Update" route -
EncounterTableRouter.route("/update/:id").post((req, res) => {
  console.log(
    `Router: Attempting to update table ${req.params.id} on DB:`,
    req.body
  );
  EncounterTable.findById(req.params.id, (err, encTable) => {
    if (!encTable) {
      res.status(404).send("MonsterBase: Table not found.");
    } else {
      // encTable = encTable.toObject();

      encTable.regionName = req.body.regionName;
      encTable.regionType = req.body.regionType;
      encTable.regionDifficulty = req.body.regionDifficulty;
      encTable.regionMonstersAndFreq = req.body.regionMonstersAndFreq;
      encTable.maxNumOfMonsters = req.body.maxNumOfMonsters;

      console.log("DB: Attempting to save: ", encTable);

      encTable
        .save()
        .then(encTable => {
          res.json("Router: Table update complete.");
        })
        .catch(err =>
          res.status(400).send("MonsterBase: Unable to update the MB database.")
        );
    }
  });
});

// "Show all" route
EncounterTableRouter.route("/").get((req, res) => {
  console.log("Router: showing all tables.");
  EncounterTable.find((err, encountertables) => {
    if (err) {
      console.log(err);
    } else {
      res.json(encountertables);
    }
  });
});

module.exports = EncounterTableRouter;
