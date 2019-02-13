// Parent: App
// Children: EditableTableList, ToggleableTableForm

import React, { Component } from "react";
import axios from "axios";
import EditableTableList from "./editableTableList.component";
import ToggleableTableForm from "./toggleableTableForm.component";
// import monsterTable from "./monsterDataBase";
const uuidv1 = require("uuid/v1");

export default class UserDashboard extends Component {
  state = {
    encTables: [
      // {
      //   regionName: "Plain Of The Standing Stones",
      //   id: uuidv1(),
      //   regionType: "Desert",
      //   regionDifficulty: 2,
      //   regionMonstersAndFreq: [
      //     [4, "Scorpion (Large)"],
      //     [9, "Pilgrim"],
      //     [12, "Toad (Poisonous)"],
      //     [15, "Nomad"],
      //     [20, "Pyrolisk"]
      //   ]
      // },
      // {
      //   regionName: "Scarab Mound - Level 3",
      //   id: uuidv1(),
      //   regionType: "Dungeon Level",
      //   regionDifficulty: 3,
      //   regionMonstersAndFreq: [
      //     [3, "Bugbear"],
      //     [7, "Ogre"],
      //     [9, "Ochre Jelly"],
      //     [11, "Tick (Giant)"],
      //     [13, "Cyclopskin"],
      //     [16, "Devil (Lemure)"],
      //     [20, "Symbiotic Jelly"]
      //   ]
      // }
    ]
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/encountertable/")
      .then(response => {
        this.setState({ encTables: response.data });
      })
      .catch(e => console.log(e));
  }

  // passed down as prop to ToggleableTableForm
  handleCreateFormSubmit = table => {
    console.log("UserDashboard creating new table for " + table.regionName);
    // const newTable = this.createNewTable(table);
    const newTable = this.state.encTables[0];
    console.log("UD: New table: ", newTable);

    axios
      .post("http://localhost:4000/encountertable/add", newTable)
      .then(res => console.log(res.data))
      .catch(err => {
        console.log("unable to save to database");
      });

    // added a callback to setState- so it logs the state *after* state updates.
    this.setState(
      { encTables: this.state.encTables.concat(newTable) },
      function() {
        console.log(this.state);
      }
    );
  };

  // Create new table - invoked by handleCreateFormSubmit
  createNewTable = (attrs = {}) => {
    return {
      regionName: attrs.regionName || "Table",
      id: uuidv1(),
      regionType: attrs.regionType || "Region Type",
      regionDifficulty: attrs.regionDifficulty || 0,
      regionMonstersAndFreq: ["-999", "Placeholder"]
    };
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTableList tables={this.state.encTables} />
          <ToggleableTableForm
            isOpen={false}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
