import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import TableForm from "./tableForm.component";

export default class ToggleableTableForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TableForm />;
    } else {
      return (
        <div className="ui basic content center aligned segment">
          <Button className="icon">
            <i className="plus icon" />
          </Button>
        </div>
      );
    }
  }
}
