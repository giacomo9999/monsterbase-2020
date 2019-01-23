// Parent: App
// Children: EditableTableList, ToggleableTableForm

import React, { Component } from "react";
// import axios from "axios";
import EditableTableList from "./editableTableList.component";
import ToggleableTableForm from "./toggleableTableForm.component";
import monsterTable from "./monsterDataBase";
const uuidv1 = require("uuid/v1");

export default class UserDashboard extends Component {
  state = {
    encTables: [
      {
        regionName: "Plain Of The Standing Stones",
        id: uuidv1(),
        regionType: "Desert",
        regionDifficulty: 2,
        regionTable: [
          [4, "Scorpion(Large)"],
          [9, "Pilgrim"],
          [12, "Toad(Poisonous)"],
          [15, "Nomad"],
          [20, "Pyrolisk"]
        ]
      },
      {
        regionName: "Scarab Mound - Level 3",
        id: uuidv1(),
        regionType: "Dungeon Level",
        regionDifficulty: 3,
        regionTable: [
          [3, "Bugbear"],
          [7, "Ogre"],
          [9, "Ochre Jelly"],
          [11, "Tick(Giant)"],
          [13, "Cyclopskin"],
          [16, "Devil(Lemure)"],
          [20, "Symbiotic Jelly"]
        ]
      }
    ]
  };

  // componentDidMount() {
  //   axios
  //     .get("/business")
  //     .then(response => {
  //       this.setState({ business: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  handleCreateFormSubmit = table => {
    this.createNewTable(table);
  };

  // Create new table - invoked by handleCreateFormSubmit
  createNewTable = (attrs = {}) => {
    return {
      title: attrs.regionName || "Table",
      id: uuidv1(),
      regionType: attrs.regionType || "Region Type",
      regionDifficulty: attrs.regionType || 0,
      regionTable: []
    };
  };

  render() {
    console.log(monsterTable);
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTableList tables={this.state.encTables} />
          <ToggleableTableForm isOpen={false} />
        </div>
      </div>
    );
  }
}
