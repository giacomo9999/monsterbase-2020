const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EncounterTable = new Schema(
  {
    regionName: { type: String },
    id: { type: Number },
    regionType: { type: String },
    regionDifficulty: { type: Number },
    regionMonstersAndFreq: [[Number, String]]
  },
  { collection: "encounter_tables" }
);

module.exports = mongoose.model("EncounterTable", EncounterTable);

// regionMonstersAndFreq: [
//     [4, "Scorpion (Large)"],
//     [9, "Pilgrim"],
//     [12, "Toad (Poisonous)"],
//     [15, "Nomad"],
//     [20, "Pyrolisk"]
//   ]
