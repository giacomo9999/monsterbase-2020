// Child of EditableTableList

import React, { Component } from "react";
import TableForm from "./tableForm.component";
import Table from "./table.component";

export default class EditableTable extends Component {
  state = {
    editFormOpen: false
  };
  render() {
    if (this.state.editFormOpen) {
      return (
        <TableForm
          regionName={this.props.regionName}
          // do we need ID at this point?
          id={this.props.id}
          regionType={this.props.regionType}
          regionDifficulty={this.props.regionDifficulty}
        />
      );
    } else {
      return (
        <Table
          id={this.props.id}
          regionName={this.props.regionName}
          regionType={this.props.regionType}
          regionDifficulty={this.props.regionDifficulty}
          regionMonstersAndFreq={this.props.regionMonstersAndFreq}
        />
      );
    }
  }
}
