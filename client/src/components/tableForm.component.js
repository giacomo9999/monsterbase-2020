import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

export default class TableForm extends Component {
  render() {
    const submitText = this.props.region ? "Update" : "Create";
    return (
      <Card centered>
        <Card.Content>
          <div className="ui blue basic inverted center aligned segment">
            <h4>{this.props.region || "New Region"}</h4>
          </div>
          <div className="ui form">
            <div className="field">
              <label>Region Name</label>
              <input
                type="text"
                defaultValue={this.props.region || "enter name here"}
              />
            </div>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="ui compact two buttons">
            <Button basic color="grey">
              {submitText}
            </Button>
            <Button basic color="grey">
              Cancel
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
