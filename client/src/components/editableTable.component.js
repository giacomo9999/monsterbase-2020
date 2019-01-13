import React, { Component } from "react";
import TableForm from "./tableForm.component";
import Table from "./table.component";

export default class EditableTable extends Component {
  render() {
    if (this.props.editFormOpen) {
      return <TableForm region={this.props.region} />;
    } else {
      return <Table region={this.props.region} />;
    }
  }
}
