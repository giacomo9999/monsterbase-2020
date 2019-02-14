const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const FreqAndNameSchema = new Schema({
//   monsterFreq: Number,
//   monsterName: String
// });

const EncounterTable = new Schema(
  {
    regionName: { type: String },
    id: { type: Number },
    regionType: { type: String },
    regionDifficulty: { type: Number },
    regionMonstersAndFreq: { type: [String] }
  },
  { collection: "encounter_tables" }
);

module.exports = mongoose.model("EncounterTable", EncounterTable);


