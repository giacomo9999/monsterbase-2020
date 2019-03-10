// Child of UserDashboard

import React, { Component } from "react";
import EditableTable from "./editableTable.component";

export default class EditableTableList extends Component {
  render() {
    // console.log("ETL - this.props.tables:", this.props.tables);
    const tables = this.props.tables.map(table => {
      console.log("ETL says maxNumOfMonsters is: ", table.maxNumOfMonsters);
      return (
        <EditableTable
          _id={table._id}
          key={table.id}
          id={table.id}
          regionName={table.regionName}
          regionType={table.regionType}
          regionDifficulty={table.regionDifficulty}
          regionMonstersAndFreq={table.regionMonstersAndFreq}
          maxNumOfMonsters={table.maxNumOfMonsters}
          onFormSubmit={this.props.onFormSubmit}
          onDeleteClick={this.props.onDeleteClick}
        />
      );
    });
    return <div id="tables">{tables}</div>;
  }
}
