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
    console.log("UserDashboard creating new table for " + table.regionName);
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

  // Create new table - invoked by handleCreateFormSubmit
  createNewTable = (attrs = {}) => {
    return {
      regionName: attrs.regionName || "Table",
      id: uuidv1(),
      regionType: attrs.regionType || "Region Type",
      regionDifficulty: attrs.regionDifficulty || 0,
      regionMonstersAndFreq: []
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
