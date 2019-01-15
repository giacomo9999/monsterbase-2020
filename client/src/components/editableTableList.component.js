import React, { Component } from "react";

import EditableTable from "./editableTable.component";

export default class EditableTableList extends Component {
  render() {
    return (
      <div id="lists">
        <EditableTable
          regionName="Scarab Mound, Level 3"
          regionType="Dungeon Level"
          regionDifficulty="3"
          editFormOpen={true}
        />
        <EditableTable
          regionName="Plain of the Standing Stones"
          regionType="Desert"
          regionDifficulty="1"
          editFormOpen={false}
        />
      </div>
    );
  }
}
