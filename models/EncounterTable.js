const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FreqAndNameSchema = new Schema({ freq: Number, name: String });

const EncounterTable = new Schema(
  {
    regionName: { type: String },
    id: { type: String },
    regionType: { type: String },
    regionDifficulty: { type: Number },
    maxNumberOfMonsters: { type: Number },
    regionMonstersAndFreq: { type: [FreqAndNameSchema] },
    
  },
  { collection: "encounter_tables" }
);

module.exports = mongoose.model("EncounterTable", EncounterTable);
