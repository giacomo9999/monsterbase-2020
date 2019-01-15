import React, { Component } from "react";
import TableForm from "./tableForm.component";
import Table from "./table.component";

export default class EditableTable extends Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TableForm
          regionName={this.props.regionName}
          regionType={this.props.regionType}
          regionDifficulty={this.props.regionDifficulty}
        />
      );
    } else {
      return (
        <Table
          regionName={this.props.regionName}
          regionType={this.props.regionType}
          regionDifficulty={this.props.regionDifficulty}
        />
      );
    }
  }
}
