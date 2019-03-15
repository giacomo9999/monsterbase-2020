// Parent: App
// Children: EditableTableList, ToggleableTableForm

import React, { Component } from "react";
import axios from "axios";
import EditableTableList from "./editableTableList.component";
import ToggleableTableForm from "./toggleableTableForm.component";
import monsterTable from "./monstersList.json";
const uuidv1 = require("uuid/v1");

export default class UserDashboard extends Component {
  state = {
    encTables: []
  };

  componentDidMount() {
    axios
      .get("/encountertable")
      .then(response => {
        this.setState({ encTables: response.data });
      })
      .catch(e => console.log(e));
  }

  // passed down as prop to ToggleableTableForm
  handleCreateFormSubmit = table => {
    const newTable = this.createNewTable(table);
    console.log("UserDashboard: New table: ", newTable);

    axios
      .post("/encountertable/add", newTable)
      .then(res => console.log(res.data));

    // added a callback to setState- so it logs the state *after* state updates.
    this.setState(
      { encTables: this.state.encTables.concat(newTable) },
      function() {
        console.log(this.state);
      }
    );
  };

  handleEditFormSubmit = attrs => {
    this.updateTable(attrs);
  };

  // passed down as prop all the way to regionTable
  handleDeleteClick = databaseId => {
    console.log("UserDashboard deleting table: ", databaseId);
    this.setState({
      encTables: this.state.encTables.filter(t => t._id !== databaseId)
    });

    axios
      .get("/encountertable/delete/" + databaseId)
      .then(console.log("Deleted from DB"))
      .catch(err => console.log(err));
  };

  updateTable = attrs => {
    console.log("UserDashboard updating table: ", attrs);

    attrs.regionMonstersAndFreq = this.createMonstersAndFreq(
      this.buildList(
        attrs.regionType,
        attrs.regionDifficulty,
        attrs.maxNumOfMonsters
      )
    );

    this.setState({
      encTables: this.state.encTables.map(table => {
        if (table.id === attrs.id) {
          return Object.assign({}, table, {
            regionName: attrs.regionName,
            regionType: attrs.regionType,
            regionDifficulty: attrs.regionDifficulty,
            regionMonstersAndFreq: attrs.regionMonstersAndFreq,
            maxNumOfMonsters: attrs.maxNumOfMonsters
          });
        } else {
          return table;
        }
      })
    });

    attrs.maxNumOfMonsters = parseInt(attrs.maxNumOfMonsters);
    console.log("Preparing attrs for DB: ", attrs);

    axios
      .post("/encountertable/update/" + attrs._id, attrs)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  getHP = hitDice => {
    // console.log("HD: ", hitDice);

    const hPArr = hitDice.split("d");
    // console.log("HP Arr: ", hPArr);

    const hPOut = hPArr[0] * hPArr[1];
    // console.log(hPOut);
    return hPOut;
  };

  buildList = (habitatName, difficulty, maxNumOfMonsters) => {
    // console.log("List Params: ", habitatName, difficulty);

    const filteredByHabitat = monsterTable.filter(
      entry => entry.habitat !== null && entry.habitat.includes(habitatName)
    );
    // console.log(filteredByHabitat);

    const filteredByDifficulty = filteredByHabitat.filter(entry => {
      const hitPoints = this.getHP(entry.hit_dice);
      // console.log(entry.name, hitPoints);
      return (
        hitPoints > difficulty * difficulty * 0.5 &&
        hitPoints < difficulty * difficulty * 1.5 + 10
      );
    });
    // console.log(filteredByDifficulty);

    const arrOut = [];

    for (
      let i = 0;
      i < filteredByDifficulty.length && i < maxNumOfMonsters;
      i += 1
    ) {
      // console.log("here.");
      arrOut.push(filteredByDifficulty[i]);
    }

    return arrOut;
  };

  createMonstersAndFreq = subListByHabAndDiff => {
    // console.log("SubList: ", subListByHabAndDiff);
    const tableOut = [];
    const weightedTableOut = [];
    let weightedFreqTotal = 0;
    subListByHabAndDiff.forEach((entry, index) => {
      const freqWeights = {
        common: 65,
        uncommon: 20,
        rare: 11,
        "very rare": 4
      };
      tableOut.push({ freq: index, name: entry.name });
      weightedTableOut.push({
        freq: freqWeights[entry.frequency],
        name: entry.name
      });
      weightedFreqTotal += freqWeights[entry.frequency];
    });

    console.log(
      `Weighted Freq Total: ${weightedFreqTotal}  Multiplier: ${100 /
        weightedFreqTotal}`
    );
    let freqCounter = 0;

    weightedTableOut.forEach(entry => {
      entry.freq = Math.round(entry.freq * (100 / weightedFreqTotal));
      freqCounter += entry.freq;
      entry.freq = freqCounter;
      console.log(freqCounter);
    });

    let lowNum = "01";
    let highNum;
    weightedTableOut.forEach(entry => {
      highNum = entry.freq;
      entry.freq = lowNum + "-" + highNum.toString();
      lowNum = highNum + 1;
    });

    console.log(weightedTableOut);
    return weightedTableOut;
  };

  // Create new table - invoked by handleCreateFormSubmit
  createNewTable = (attrs = {}) => {
    return {
      regionName: attrs.regionName || "Table",
      id: uuidv1(),
      regionType: attrs.regionType || "Region Type",
      regionDifficulty: attrs.regionDifficulty || 0,
      regionMonstersAndFreq: this.createMonstersAndFreq(
        this.buildList(
          attrs.regionType,
          attrs.regionDifficulty,
          attrs.maxNumOfMonsters
        )
      ),
      maxNumOfMonsters: attrs.maxNumOfMonsters || 5
    };
  };

  render() {
    // console.log(this.state);
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTableList
            tables={this.state.encTables}
            onFormSubmit={this.handleEditFormSubmit}
            onDeleteClick={this.handleDeleteClick}
          />
          <ToggleableTableForm
            isOpen={false}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
