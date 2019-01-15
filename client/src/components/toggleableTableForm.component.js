import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import TableForm from "./tableForm.component";

export default class ToggleableTableForm extends Component {
  state = { isOpen: false };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = table => {
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
