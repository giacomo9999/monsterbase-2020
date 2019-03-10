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
    console.log("Editable Table submitting edited table: ", table);
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
    console.log("Editable Table Props: ", this.props);
    if (this.state.editFormOpen) {
      return (
        <TableForm
          _id={this.props._id}
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
          _id={this.props._id}
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
