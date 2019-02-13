// Opens and closes to display TableForm
// child of UserDashboard
// children: TableForm

import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import TableForm from "./tableForm.component";

export default class ToggleableTableForm extends Component {
  state = { isOpen: false };

  // passed to Button; opens form
  handleFormOpen = () => {
    console.log("TTF opening form.");
    this.setState({ isOpen: true });
  };

  // passed to TableForm; closes form
  handleFormClose = () => {
    console.log("TTF closing form.");
    this.setState({ isOpen: false });
  };

  // passed to TableForm; submits table data and closes form
  handleFormSubmit = table => {
    console.log("TTF handling form submission for " + table);
    this.props.onFormSubmit(table);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TableForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className="ui basic content center aligned segment">
          <Button className="ui button icon" onClick={this.handleFormOpen}>
            <i className="plus icon" />
          </Button>
        </div>
      );
    }
  }
}
