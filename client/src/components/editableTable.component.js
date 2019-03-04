// Child of EditableTableList

import React, { Component } from "react";
import TableForm from "./tableForm.component";
import Table from "./regionTable.component";

export default class EditableTable extends Component {
  state = {
    editFormOpen: false
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = table => {
    this.props.onFormSubmit(table);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
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
          maxNumOfMonsters={this.props.maxNumOfMonsters}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
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
          maxNumOfMonsters={this.props.maxNumOfMonsters}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.props.onDeleteClick}
        />
      );
    }
  }
}
