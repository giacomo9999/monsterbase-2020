// Parent: App
// Children: EditableTableList, ToggleableTableForm

import React, { Component } from "react";
// import axios from "axios";
import EditableTableList from "./editableTableList.component";
import ToggleableTableForm from "./toggleableTableForm.component";
import { Button } from "semantic-ui-react";
// import monsterTable from "./monsterDataBase";
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

  // passed down as prop to ToggleableTableForm
  handleCreateFormSubmit = table => {
    this.setState({ foo: "bar" });
    // console.log("UserDashboard creating new table for " + table.regionName);
    // const newTable = this.createNewTable(table);
    // console.log("New table: ", newTable);
    // this.setState({ encTables: this.state.encTables.concat(newTable) });
    console.log("State: ", this.state);
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

  setStateToFooBar = e => {
    this.setState({ foo: "bar" });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTableList tables={this.state.encTables} />
          <ToggleableTableForm
            isOpen={false}
            onFormSubmit={this.handleCreateFormSubmit}
          />
          <Button className="ui button icon" onClick={this.setStateToFooBar} />
        </div>
      </div>
    );
  }
}
